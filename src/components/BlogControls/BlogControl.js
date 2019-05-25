import React, { useState, useEffect } from 'react'
import blogService from '../../services/blogService'

import { Menu, Message } from 'semantic-ui-react'
import CreateBlog from './CreateBlog'
import ToggleShow from './ToggleShow'

const BlogControl = () => {
  const [active, setActive] = useState('create')
  const [message, setMessage] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const blogData = await blogService.getHidden()
      setData(blogData)
    }
    getData()
  }, [])

  const refetchBlogData = async () => {
    const blogData = await blogService.getHidden()
    setData(blogData)
  }

  const renderMessage = () => {
    return (
      <Message>
        {
          message.message
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
    } else if (active === 'toggle') {
      return <ToggleShow blogs={data} refetch={refetchBlogData}/>
    } else if (active === 'edit') {
      return <div>asd</div>
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