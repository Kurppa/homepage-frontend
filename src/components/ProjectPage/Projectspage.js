import React from 'react'
import { Card } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

import Chip8pingpong from '../../images/Chip8pingpong.png'
import gol from '../../images/gol.png'
import convoImage from '../../images/convoImage.png'

//text, link, header, imgLink, date(optional)
const cardData = [
  {
    text: 'Implementation of the classic Conway\'s game of life. Made with C++ and SMFL',
    imgLink: gol,
    header: 'Game Of Life',
    link: 'https://github.com/Kurppa/game-of-life-2.0',
    date: '2018'
  },
  {
    text: 'Chip8 emulator made with C++ and SFML',
    imgLink: Chip8pingpong,
    header: 'Chip8 emulator',
    link: 'https://github.com/Kurppa/chip8',
    date: '2018'
  },
  {
    text: 'Messaging app with node, react and graphql',
    imgLink: convoImage,
    header: 'Messaging App',
    link: 'https://github.com/Kurppa/convoFrontend',
    date: '2018'
  }
]

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
