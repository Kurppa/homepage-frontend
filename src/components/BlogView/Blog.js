import React from 'react'
import { Header } from 'semantic-ui-react'

import Chapter from './Chapter'

const Blog = (props) => {
    
  return (
    <div>
      <div>
        <img src={props.blog.image} />
      </div>
      <Header as='h1' >{props.blog.title}</Header>
      {
        props.blog.content.map(chapter => <Chapter key={chapter.title} chapter={chapter} />)
      }
    </div>
  )

}

export default Blog
