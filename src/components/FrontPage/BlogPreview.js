import React, { useState } from 'react'
import { Image, Header } from 'semantic-ui-react'
import kurppa from '../../images/kurppa.png'

const BlogPreview = ({ blog }) => {
  const [show, setShow] = useState(false)

  //css-monsters :S
  const previewDivStyle = {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    margin: '2em 0',
    background: '#ffd9b3',
    borderRadius: '10px' 
  }
  
  const imageDivStyle = {
    maxHeight: '250px',
    overflow: 'hidden',
    borderRadius: '10px 10px 0 0' 

  }

  const imageStyle = {
    width: '100%'
  }

  const textDivStyle = {
    padding: '1em',
    overflow: 'hidden'
  }

  const toggleShow = () => {
    setShow(!show)
  }

  const image = blog.image ? blog.image : kurppa

  return (
    <div style={previewDivStyle}>
      <div style={imageDivStyle} >
        <Image style={imageStyle} src={image} />
      </div>
      <div onClick={toggleShow} style={textDivStyle}>  
        <Header>{ blog.title }</Header>
        {
          show ? blog.content : null
        }
        
      </div>

    </div>
  )
}

export default BlogPreview