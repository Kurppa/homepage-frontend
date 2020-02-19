import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {

  const { text, imgLink, header, link } = project

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
}

export default ProjectCard
