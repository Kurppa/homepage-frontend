import React, { useState } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import CreateBlog from './CreateBlog'

const BlogControl = () => {
  const [active, setActive] = useState('create')
  const [message, setMessage] = useState(null)

  const renderMessage = () => {
    return (
      <Message>
        {
          message.data
        }
      </Message>
    )
  }

  const createMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }
  
  const renderView = () => {
    if (active === 'create') {
      return <CreateBlog setMessage={createMessage} />
    }
  }

  return  (
    <>
    <Menu widths={3}>
      <Menu.Item
        active={active === 'create'}
        onClick={() => setActive('create')}
      >
        Add Blog
      </Menu.Item>
      <Menu.Item
        active={active === 'toggle'}
        onClick={() => setActive('toggle')}
      >
        Hide or Show
      </Menu.Item>
      <Menu.Item
        active={active === 'edit'}
        onClick={() => setActive('edit')}
      >
        Edit blogs
      </Menu.Item>
    </Menu>
    {
      renderView()
    }
    {
      message ? renderMessage() : null
    }
    </>
  )
}

export default BlogControl