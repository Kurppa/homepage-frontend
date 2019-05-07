import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Container, Header, Segment } from 'semantic-ui-react'
import Menubar from './components/Menubar' 
import Frontpage from './components/Frontpage'
import Aboutpage from './components/Aboutpage'
import Projectspage from './components/Projectspage'

const App = () => {
  return (
    <Router>
      <Menubar />
      <Container style={{ 'margin': '3rem 0rem' }}>
        <Switch>
          <Route exact path='/' render={() => (
            <Frontpage />
          )}
          />
          <Route exact path='/about' render={() => (
            <Aboutpage />
          )}/>
          <Route exact path='/projects' render={() => (
            <Projectspage />
          )}/>
          <Route render={() => (
            <Segment>
              <Header as='h1'>Nothing here</Header>
            </Segment>
          )} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
