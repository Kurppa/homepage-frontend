import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, Grid, Segment, Header } from 'semantic-ui-react'

import  loginService from '../services/loginService'
import blogService from '../services/blogService'

const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const submit = async (event) => {
    event.preventDefault()
    if (!username.trim() || !password.trim()) {
      props.setMessage({
        status: 'warning',
        message: 'Please enter password and username'
      })
      return 
    }
    try {
      const responseData = await loginService.login({
        password,
        username
      })
      blogService.setToken(responseData.token)
      props.setLogin(true) 
      props.history.push('/blogging')
    } catch (e) {
      props.setMessage({
        status: 'error',
        message: 'Wrong credentials'
      })
    }
  }

  return (
    <Grid centered>
      <Grid.Column>
        <Segment>
          <Header as='h1' textAlign='center'>
          Login
          </Header>
          <Segment style={{ margin: '3em 0' }}>
            <Form size='large' onSubmit={submit}>
              <Form.Field>
                <label>Username</label>
                <input value={username} onChange={({ target }) => setUsername(target.value)}/>  
              </Form.Field> 
              <Form.Field>
                <label>password</label>  
                <input type='password' value={password} onChange={({ target }) => setPassword(target.value)}/>  
              </Form.Field>
              <Button color='blue' type='submit'>Login</Button>     
            </Form>
          </Segment>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default withRouter(LoginPage)