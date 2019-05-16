import React, { useState } from 'react'
import Chapter from './ChapterForm'
import { Segment, Form, Button, Icon, Header } from 'semantic-ui-react'

import blogService from '../../services/blogService'

const CreateBlog = (props) => {
  const [header, setHeader] = useState('')
  const [image, setImage] = useState(null)
  const [chapters, setChapters] = useState([{
    title: '',
    content: '',
  }])

  const updateHeader = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, title: data })
    )
  } 

  const updateContent = (id, data) => {
    setChapters(
      chapters.map((c, index) => index !== id ? c : { ...c, content: data })
    )
  } 

  const submit = (e) => {
    e.preventDefault()
    try {
      let reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = async () => {
        const blog = {
          title: header,
          content: [ ...chapters ],
          image: reader.result
        }  
        await blogService.create(blog)
      }
      setHeader('')
      setChapters([
        {
          title: '',
          content: ''
        }
      ])
      props.setMessage({
        status: 'success',
        message: 'Blog succesfully created'
      })
    } catch (e) {
      props.setMessage({
        status: 'error',
        message: e.message
      })
    }
    
  }

  const addChapter = () => {
    setChapters(chapters.concat({
      title: '',
      content: ''
    }))
  }

  const removeChapter = () => {
    if ( chapters.length === 1 ) {
      return
    }
    const newChapters = [ ...chapters ]
    newChapters.pop()
    setChapters(newChapters)
  }

  const selectImage = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <>
    <Segment>
      <Header as='h2'>Add a new blog</Header>
      <Form onSubmit={submit}>
        <label>Title</label>
        <input type='text' value={header} onChange={({ target }) => setHeader(target.value)} />
        <input onChange={selectImage} name='file' type='file' />
        {
          chapters.map((c, index) => <Chapter
            key={index}
            onChange={e => {
              e.target.name === 'header' ? 
                updateHeader(index, e.target.value) 
                : updateContent(index, e.target.value)
            }}
            content={c.content}
            header={c.header}
          />) 
        }
        <Button color='green' type='submit'>Save blog</Button>
      </Form>
      
    </Segment>
      <Button.Group>
        
        <Button icon color='blue' onClick={addChapter}>
          <Icon name='plus square' />
        </Button>
        <Button icon color='yellow' onClick={removeChapter}>
          <Icon name='minus square' />
        </Button>
      </Button.Group>
      </>
  )
}

export default CreateBlog