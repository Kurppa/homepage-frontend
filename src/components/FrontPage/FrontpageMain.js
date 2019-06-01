import React from 'react'
import { connect } from 'react-redux'
import { Header, Segment, Card } from 'semantic-ui-react'

import BlogPreview from './BlogPreview'

const FrontpageMain = (props) => {
  const blogs = props.blogs.concat(props.blogs)
  return (
    <div>
      <Header as='h1'>Recent posts</Header>
      <Card.Group>
        {
          props.blogs.length > 0 ? 
            blogs.map(blog => <BlogPreview key={blog.title} blog={blog} />) 
            : <Segment>
              <Header as='h2'>No posts yet</Header>
            </Segment>
        }

      </Card.Group>
    </div>     
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state
  }
}

export default connect(mapStateToProps, {})(FrontpageMain)
