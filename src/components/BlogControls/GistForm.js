import React from 'react'
import { Segment } from 'semantic-ui-react'

const GistForm = (props) => {

  return (
    <Segment color='blue'>
      <label>Gist link</label>
      <input value={props.link} type='text' name='link' onChange={props.onChange}></input>
    </Segment>
  )
}

export default GistForm