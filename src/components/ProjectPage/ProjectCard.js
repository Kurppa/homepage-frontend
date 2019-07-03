import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {

  const { text, imgLink, header, link } = project

  /*
  const imageStyle = {
    height: '60%'
  }*/

  return (
    <Card raised fluid>
    <Card.Content>
      <a href={link}>
        <Image  style={{ height: '300px' }} size='medium' floated='right' src={imgLink} />
      </a>
      <a href={link}>
      <Label size='large' as='a' color='orange' ribbon='right'>
          Click the image for github repo
      </Label> 
      </a>
     <Card.Header>{ header }</Card.Header>
      {
        project.date && 
          <Card.Meta>{project.date}</Card.Meta>
      } 
      <br/>
      <p>
        { text }
      </p>
      {
        project.live &&
          <div style={{ marginTop: '2em' }}>
            <a href={project.live}>Click to see the live site at: {project.live}</a>
            <p>
              Please note that the site is only accessible from EU and US.
            </p>
          </div>
      }

    </Card.Content>
  </Card>
  )
  //former card
  /*
  return (
    <Card style={ { height: '420px', width: '100%' } }>
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
  )*/
}

export default ProjectCard
