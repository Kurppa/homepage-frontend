import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Menubar = ({ location }) => {
  const [activeItem, setActiveItem] = useState('')
  
  //eslint complains about missing dep..
  //first render sets the right active item by path from router
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])

  return (
    <Menu inverted pointing>
      <Menu.Item header as='h3' >
          Peik Feiring
      </Menu.Item>
      <Menu.Item as={Link} to='/'
        name='Home'
        active={activeItem === '/'}
        onClick={() => setActiveItem('/')}
      >
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/about'
        name='About'
        active={activeItem === '/about' || activeItem === '/about/'}
        onClick={() => setActiveItem('/about')}
      >
        About
      </Menu.Item>
      <Menu.Item as={Link} to='/projects'
        name='About'
        active={activeItem === '/projects' || activeItem === '/projects/'}
        onClick={() => setActiveItem('/projects')}
      >
        projects
      </Menu.Item>
       
    </Menu>
  )
}

export default withRouter(Menubar)