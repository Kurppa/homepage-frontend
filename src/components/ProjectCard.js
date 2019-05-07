import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {

  const { text, imgLink, header, link } = project

  const imageStyle = {
    height: '60%'
  }

  return (
    <Card style={{ overflow: 'hidden' }}color='black'>
      <Image style={imageStyle} src={imgLink} />
      <Card.Content>
        <Card.Header as='a' href={link}>{header}</Card.Header>
        {project.date && <Card.Meta>
          <span className='date'>{project.date}</span>
        </Card.Meta>}
        <Card.Description>{text}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={link}>
          <Icon size='large' name='github square' />
          See in github
        </a>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
