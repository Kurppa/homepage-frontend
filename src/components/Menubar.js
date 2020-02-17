import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Menubar = ({ location }) => {
  const [activeItem, setActiveItem] = useState('')
  
  //first render sets the right active item by path from router
  useEffect(() => {
    setActiveItem(location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Menu inverted widths={3}>
      <Menu.Item as={Link} to='/'
        name='About'
        active={activeItem === '/'}
        onClick={() => setActiveItem('/')}
      >
        About
      </Menu.Item>
      <Menu.Item as={Link} to='/projects'
        name='About'
        active={activeItem === '/projects' || activeItem === '/projects/'}
        onClick={() => setActiveItem('/projects')}
      >
        Projects
      </Menu.Item>
      <Menu.Item as={Link} to='/blogs'
        name='Blog'
        active={activeItem === '/blogs' || activeItem === '/blogs/'}
        onClick={() => setActiveItem('/blogs')}
      >
        Blogs
      </Menu.Item>
    </Menu>
  )
}

export default withRouter(Menubar)
