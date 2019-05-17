import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Header } from 'semantic-ui-react'
import kurppa from '../../images/kurppa.png'

const BlogPreview = ({ blog }) => {

  //css-monsters :S

  const previewDivStyle = {
    width: '100%',
    margin: '2em 0',
    borderColor: 'black',
    borderWidth: '4px',
    borderStyle: 'solid',
    background: 'white' 
  }
  
  const imageDivStyle = {
    borderColor: 'red',
    borderWidth: '4px',
    borderStyle: 'solid',
    maxHeight: '250px',
    overflow: 'hidden'
  }

  const imageStyle = {
    width: '100%'
  }

  const textDivStyle = {
    padding: '1em',
    overflow: 'hidden'
  }

  const image = blog.image ? blog.image : kurppa

  return (
    <div style={previewDivStyle}>
      <div style={imageDivStyle} >
        <Image style={imageStyle} src={image} />
      </div>
      <div style={textDivStyle}>  
        <Header>{ blog.title }</Header>
        {blog.content}
      </div>
    </div>
  )
}

export default BlogPreview