import React from 'react'
import { Divider, Segment, Header, Icon, List } from 'semantic-ui-react' 
import SkillsTable from './SkillsTable' 

const Aboutpage = () => {

  return (
    <React.Fragment>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='user' />
        About me
        </Header>
      </Divider>
      <Segment>
        <div className='large text' style={ { padding: '1rem' } }> 
          <p>
        Hi! My name is Peik. I like computers, music, sports, chess, science and philosophy. I have just finished my first year studies in a university of applied sciences and
        I am keen to keep learning new and improving. 
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
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='code' />
        Programming skills
        </Header>
        
      </Divider>

      <SkillsTable />
      <br />

      <Divider horizontal>
        <Header>
          <Icon name='address card' />
          Contact info
        </Header>
      </Divider>
      <Segment>
        <List divided relaxed>
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
        </List>
      </Segment>

    </React.Fragment>

  )

}

export default Aboutpage
