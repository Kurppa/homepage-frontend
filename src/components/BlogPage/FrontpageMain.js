import React from 'react'
import { connect } from 'react-redux'
import { Header, Segment, Card } from 'semantic-ui-react'

import BlogPreview from './BlogPreview'

const FrontpageMain = (props) => {

  const blogs = props.blogs.sort((a,b) => {
    const aday = new Date(a.date)
    const bday = new Date(b.date)
    return aday < bday
  })
  return (
    <div>
      <Header as='h1'>Recent posts</Header>
      {
        blogs.length > 0 ? 
          <Card.Group>
            {
              blogs.map(blog => <BlogPreview key={blog.title} blog={blog} />) 
            }
          </Card.Group>
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
