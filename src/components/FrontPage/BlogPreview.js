import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Image, Header } from 'semantic-ui-react'
import kurppa from '../../images/kurppa.png'

const BlogPreview = (props) => {
  const [show, setShow] = useState(false)

  const { blog } = props

  const previewDivStyle = {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    margin: '2em 0',
    background: 'white',
    borderRadius: '10px' 
  }
  
  const imageDivStyle = {
    maxHeight: '250px',
    overflow: 'hidden',
    borderRadius: '10px 10px 0 0' 
  }

  const textDivStyle = {
    padding: '1em',
    overflow: 'hidden'
  }

  const toggleShow = () => {
    setShow(!show)
  }

  const linkToBlog = () => {
    props.history.push(`/blogs/${blog.id}`)
  }

  const image = blog.image ? blog.image : kurppa
  const previewChapter = blog.content[0].type === 'text' ?  blog.content[0].content : null

  return (
    <div style={previewDivStyle}>
      <div style={imageDivStyle} >
        <Image fluid onClick={linkToBlog} src={image} />
      </div>
      <div onClick={toggleShow} style={textDivStyle}>  
        <Header as='h3' dividing>{ blog.title }</Header>
        {
          show ? (previewChapter.length > 100 && previewChapter ? (previewChapter.substring(0,200) + '...'): previewChapter) : null
        }
      </div>
    </div>
  )
}

export default withRouter(BlogPreview)