import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {

  const { text, imgLink, header, link } = project

  const imageStyle = {
    height: '60%'
  }

  return (
    <Card style={ { height: '420px' } }>
      <Image src={imgLink} style={imageStyle} />
      <Card.Content>
        <Card.Header>{ header }</Card.Header>
        {
          project.date && 
            <Card.Meta>{project.date}</Card.Meta>
        }
        <Card.Description>
          { text }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={link}>
          <Icon name='github square' size='large' />
          See project in github
        </a>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
