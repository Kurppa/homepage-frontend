import React from 'react'
import Gist from 'react-gist'
import { Header, Segment, Image } from 'semantic-ui-react'

import Chapter from './Chapter'
import kurppa from '../../images/kurppa.png'

const Blog = ({ blog }) => {
  
  const image = blog.image ? blog.image : kurppa

  const imageBgContainerStyle = {
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
    zIndex: 9999,
  }

  const renderComponent = c => {
    if (c.type === 'text') {
      return (
        <Chapter key={c.title} chapter={c} />
      )
    } else if (c.type === 'gist') {
      return (
        <Gist id={c.content} />
      )
    } else if (c.type === 'image') {
      return (
        <Segment>
          <Image centered style={ { maxHeight: '300px' }} src={c.image} />
        </Segment>
      )
    }
  }

  return (
    <Segment>
      <div style={imageBgContainerStyle}>
        <div style={backgroundDivStyle} ></div>
        <Image style={imageStyle} centered src={image} size='medium' />
      </div>
      <Header as='h1' dividing>{blog.title}</Header>
      {
        blog.content.map((chapter, index) => <div key={index}>{ renderComponent(chapter) }</div>)
      }
    </Segment>
  )

}

export default Blog
