import React from 'react'
import { Segment, TextArea } from 'semantic-ui-react'

const ChapterForm = (props) => {

  return (
    <Segment>
      <label>Header</label>
      <input type='text' name='header' onChange={props.onChange}></input>
      <label>Content</label>
      <TextArea type='text' name='content' onChange={props.onChange} />
    </Segment>
  )
}

export default ChapterForm