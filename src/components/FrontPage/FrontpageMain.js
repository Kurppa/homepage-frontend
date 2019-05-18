import React from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import BlogPreview from './BlogPreview'

const FrontpageMain = (props) => {
  return (
    <div>
      <Header as='h1'>Recent posts</Header>
      {
        props.blogs.length > 0 ? 
          props.blogs.map(blog => <BlogPreview key={blog.title} blog={blog} />) 
          : <Segment>
            <Header as='h2'>No posts yet</Header>
          </Segment>
      }
    </div>     
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state
  }
}

export default connect(mapStateToProps, {})(FrontpageMain)
