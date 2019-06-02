import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Image, Card, Dimmer, Header } from 'semantic-ui-react'
import kurppa from '../../images/kurppa.png'

const BlogPreview = (props) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)

  const { blog } = props

  const date = new Date(blog.date)

  const image = blog.image ? blog.image : kurppa
  const previewChapter = blog.content[0].type === 'text' ?  blog.content[0].content : null

  const imageBgContainerStyle = {
    borderWidth: '0 0 1px 0',
    borderStyle: 'solid',
    width: '100%',
    display: 'block',
    position: 'relative',
    overflow: 'hidden'
  }

  const backgroundDivStyle = {
    position: 'absolute',
    display: 'inline-block',
    width: '100%',
    backgroundImage: `url(${image})`,
    filter: 'blur(8px)',
    height: '100%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  }

  const imageStyle = {
    position: 'relative',
   
  }

  const toggleShow = () => {
    setShow(!show)
  }

  const linkToBlog = () => {
    props.history.push(`/blogs/${blog.id}`)
  }

  return (    
    <Card fluid>
      <Dimmer.Dimmable onClick={linkToBlog} dimmed={active} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)} >
        <div  style={imageBgContainerStyle}>
          <div style={backgroundDivStyle} ></div>
          <Image style={imageStyle} centered src={image} size='medium' />
        </div>
        <Dimmer inverted active={active} >
          <Header as='h2' style={{ color: 'black' }}>
              Click to open!
          </Header>
        </Dimmer>
      </Dimmer.Dimmable>
      <Card.Content>
        <Card.Header>{ blog.title }</Card.Header>
        <Card.Meta>
          <span className='date'>{ date.toLocaleDateString() }</span>
        </Card.Meta>
        <Card.Description onClick={toggleShow}>
          {
            show ? (previewChapter.length > 100 && previewChapter ? (previewChapter.substring(0,200) + '...'): previewChapter) : '...'
          }
        </Card.Description>
      </Card.Content>
    </Card>
  )

}

export default withRouter(BlogPreview)