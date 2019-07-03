import React, { useState } from 'react'
import Chapter from './ChapterForm'
import Gist from './GistForm'
import { Radio, Segment, Divider, Form, Button, Icon, Header } from 'semantic-ui-react'

import blogService from '../../services/blogService'

const CreateBlog = (props) => {
  const [header, setHeader] = useState('')
  const [image, setImage] = useState(null)
  const [hidden, setHidden] = useState(true)
  const [chapters, setChapters] = useState([])

  //TODO: these could be hidden in their respective components
  const updateHeader = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, title: data })
    )
  } 

  const updateLink = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, content: data })
    )
  }

  const updateImage = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, obj: data })
    )
  }

  const updateContent = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, content: data })
    )
  } 

  const remove = (e, id) => {
    e.preventDefault()
    setChapters(chapters.filter((_,index) => index !== id))
  }

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (e.type !== 'submit') {
      return
    }
    try {
      const blog = {
        title: header,
        hidden
      }
      blog.content = await Promise.all(chapters.map(async c => {
        if (c.type !== 'image') {
          return c
        }
        let imageData = await readFileAsync(c.obj)

        return {
          type: 'image',
          image: imageData
        }

      }))
      if (image) {
        blog.image = await readFileAsync(image)
      } 

      await blogService.create(blog)
      
      setChapters([])
      setHeader('')
      setImage(null)
      props.setMessage({
        status: 'success',
        message: 'Blog succesfully created'
      })
    } catch (e) {
      //Do we want to clear the fields if saving is unsuccesful
      //should fail only if title is not set or unique
      setChapters([])
      setHeader('')
      setImage(null)
      props.setMessage({
        status: 'error',
        message: e.message
      })
    }
  }

  //returns components based on the objects stored in chapters list
  const renderComponents = (c, index) => {
    if (c.type === 'text') {
      return (
        <><Chapter
          onChange={e => {
            e.target.name === 'header' ? 
              updateHeader(index, e.target.value) 
              : updateContent(index, e.target.value)
          }}
          content={c.content}
          title={c.title}
        />
          <Button type='remove' color='yellow' onClick={e => remove(e, index)}>remove</Button>
          <Divider />
        </>
      )
    } else if (c.type === 'gist') {
      return (
        <>
        <Gist 
          onChange={e => {updateLink(index, e.target.value)}}
        />
          <Button type='remove' color='yellow' onClick={e => remove(e, index)}>remove</Button>
          <Divider />
        </>
      )
    } else if (c.type === 'image') {
      return (
        <>
          <Segment color='orange'>
            <label>image</label>
            <input onChange={e => {updateImage(index, e.target.files[0])}} name='file' type='file' />
          </Segment>
          <Button type='remove' color='yellow' onClick={e => remove(e, index)}>remove</Button>
          <Divider />
        </>
      )
    }
  } 

  const addChapter = (e) => {
    e.preventDefault()
    setChapters(chapters.concat({
      type: 'text',
      title: '',
      content: ''
    }))
  }

  const addGist = (e) => {
    e.preventDefault()
    setChapters(chapters.concat({
      type: 'gist',
      content: ''
    }))
  }

  const addImage = (e) => {
    e.preventDefault()
    setChapters(chapters.concat({
      type: 'image',
      obj: null
    }))
  }

  const selectImage = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <>
   
      <Segment>
        <Header as='h2'>Add a new blog</Header>
      </Segment>
      <Form onSubmit={submit}>
        <Segment style={ { padding: '1em 2px', margin: '0px' } }>
          <label>Title</label>
          <input type='text' value={header} onChange={({ target }) => setHeader(target.value)} />
          <input onChange={selectImage} name='file' type='file' />
          <div style={ { padding: '1em 0' } } >
            <Radio style={ { float: 'left' } } onChange={() => setHidden(!hidden)} toggle />
            <p style={{ float: 'left', paddingLeft: '1em' }}>{hidden ? 'hidden' : 'visible' }</p>
          </div>
          <Divider />
        
          {
            chapters.map((c, index) => <div key={index}>{renderComponents(c, index)}</div>) 
          }
          <Button.Group widths={3}>
            <Button icon color='green' onClick={addChapter}>
              <Icon name='pen square' />
            </Button>
            <Button icon color='blue' onClick={addGist}>
              <Icon name='code' />
            </Button>
            <Button icon color='orange' onClick={addImage}>
              <Icon name='image' />
            </Button>
          </Button.Group>
        </Segment>
        <Segment>
          <Button color='green' type='submit'>Save blog</Button>
        </Segment>
      </Form>
     
    </>
  )
}

export default CreateBlog
