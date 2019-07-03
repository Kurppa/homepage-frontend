import React, { useState, useEffect } from 'react'

import blogService from '../../services/blogService'

import { Segment, Button } from 'semantic-ui-react'

const Single = ({ blog }) => {
  const [hidden, setHidden] = useState(null)

  useEffect(() => {
    setHidden(blog.hidden)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggle = async () => {
    setHidden(!hidden)  
    const newBlog = blog
    newBlog.hidden = !newBlog.hidden
    newBlog.content = newBlog.content.map(c => c.id)
    await blogService.update(newBlog)
  }

  const renderButton = () => {
    if (hidden) {
      return (
        <Button color='yellow' fluid animated onClick={handleToggle}>
          <Button.Content visible>
            {blog.title}
          </Button.Content>
          <Button.Content hidden>
            Change to visible
          </Button.Content>
        </Button>  
      )
    } else {
      return (
        <Button color='blue' fluid animated onClick={handleToggle}>
          <Button.Content visible>
            {blog.title}
          </Button.Content>
          <Button.Content hidden>
            Hide blog
          </Button.Content>
        </Button>  
      )
    }
  }

  return (
    <Segment>
      {
        renderButton()
      }
    </Segment>
  )
}

const ToggleShow = ({ blogs, refetch }) => {

  if (!blogs) {
    return <div>no blogs</div>
  }

  return (
    <>
      {
        blogs.map(b => <Single key={b.title} refetch={refetch} blog={b} />)
      }
    </>
  )
}

export default ToggleShow