import React from 'react'
import Gist from 'react-gist'
import { Header, Segment, Image } from 'semantic-ui-react'

import Chapter from './Chapter'
import kurppa from '../../images/kurppa.png'

const Blog = ({ blog }) => {
  
  const image = blog.image ? blog.image : kurppa

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
      <Image bordered fluid style={ { maxHeight: '300px', objectFit: 'cover'  } } src={image} alt='blog' />
      <Header as='h1' dividing>{blog.title}</Header>
      {
        blog.content.map((chapter, index) => <div key={index}>{ renderComponent(chapter) }</div>)
      }
    </Segment>
  )

}

export default Blog
