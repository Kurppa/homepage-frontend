import React from 'react'
import { Divider, Segment, Header, Icon, List } from 'semantic-ui-react' 
import SkillsTable from './SkillsTable' 

const Aboutpage = () => {

  return (
    <React.Fragment>
      <Segment>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='user' />
        About me
        </Header>
      </Divider>
        <div className='large text' style={ { padding: '1rem', textAlign: 'center' } }> 
          <p>
            Hi! My name is Peik. I am a self-taught web developer focused in creating sites with MERN-stack.
          </p>
          <p>
          My main interests in the field of technology are web-development (backend and frontend) and cybersecurity. 
          </p>
          <p>
            Open to all ideas and opportunities. Contact info below.
          </p>
        </div>
      </Segment>
      <br />
      <Segment>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='code' />
          Skills
        </Header>
        
      </Divider>

      <SkillsTable />
      </Segment>
      <br />

      <Segment style={{ marginBottom:'2em'}}>
      <Divider horizontal>
        <Header>
          <Icon name='address card' />
          Contact
        </Header>
      </Divider>
        <List relaxed>
          <List.Item>
            <List.Icon name='linkedin' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='http://linkedin.com/in/peikfeiring'>Linkedin</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github square' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='http://github.com/Kurppa'>Github</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='mailto: peik.feiring@tuni.fi' >peik.feiring@tuni.fi</List.Header>
            </List.Content>
          </List.Item>
        </List>
        
      </Segment>
      

    </React.Fragment>

  )

}

export default Aboutpage
