import React from 'react'
import { Header } from 'semantic-ui-react'

const Chapter = (props) => {

  return (
    <div>
      <Header as='h3'>{props.title}</Header>
      <div>
        {
          props.content
        }
      </div>
    </div>
  )
}

export default Chapter