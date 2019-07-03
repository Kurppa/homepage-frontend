import React from 'react'
import { Segment, TextArea } from 'semantic-ui-react'

const ChapterForm = (props) => {

  return (
    <Segment color='green'>
      <label>Header</label>
      <input value={props.title} type='text' name='header' onChange={props.onChange}></input>
      <label>Content</label>
      <TextArea value={props.content} type='text' name='content' onChange={props.onChange} />
    </Segment>
  )
}

export default ChapterForm