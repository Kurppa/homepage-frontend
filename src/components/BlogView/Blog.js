import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

import Chapter from './Chapter'
import kurppa from '../../images/kurppa.png'

const Blog = ({ blog }) => {
  
  const image = blog.image ? blog.image : kurppa

  return (
    <Segment>
      <div style={{ maxHeight: '300px', overflow: 'hidden' }} >
        <img style={{ width: '100%' }} src={image} alt='blog' />
      </div>
      <Header as='h1' dividing>{blog.title}</Header>
      {
        blog.content.map(chapter => <Chapter key={chapter.title} chapter={chapter} />)
      }
    </Segment>
  )

}

export default Blog
