import React from 'react'
import { Header, Divider } from 'semantic-ui-react'

const Chapter = ({ chapter }) => {

  const parts = chapter.content.split('\n')

  console.log(parts.length)

  return (
    <div style={{ padding: '1.5em 0', wordWrap: 'break-word' }}>
      <Divider />

      <Header as='h3'>{chapter.title}</Header>
      <div className={'large text'}>
        {chapter.content.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })}
      </div>
    </div>
  )
}

export default Chapter