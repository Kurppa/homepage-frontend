import React from 'react'
import ProjectCard from './ProjectCard'

import { Card } from 'semantic-ui-react'

import { cardData } from '../../data/projects'

const Projectspage = () => {

  return (
    <Card.Group centered>
      {
        cardData.map(project => 
          <ProjectCard
            key={project.text}
            project={project} 
          />
        )
      }
    </Card.Group>
  )

}

export default Projectspage
