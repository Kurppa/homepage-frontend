/* eslint-disable */
import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const AlternateCard = ({ project }) => {

  const { text, imgLink, header, link, date } = project

  const imgStyle = {
    height: '60%'
  }

  return (
    <Card>
    <Image src={imgLink} />
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>{text}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {link}
      </a>
    </Card.Content>
  </Card>
  ) 
}

export default AlternateCard