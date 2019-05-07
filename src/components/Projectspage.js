import React from 'react'
import { Card } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'

//text, link, header, imgLink, date(optional)
const cardData = [
  {
    text: 'Implementation of the classic Conway\'s game of life. Made with C++ and SMFL',
    imgLink: 'https://raw.githubusercontent.com/Kurppa/game-of-life-2.0/master/gol.png',
    header: 'Game Of Life',
    link: 'https://github.com/Kurppa/game-of-life-2.0',
    date: '2018'
  },
  {
    text: 'Chip8 emulator made with C++ and SFML',
    imgLink: 'https://raw.githubusercontent.com/Kurppa/chip8/master/Chip8pingpong.png',
    header: 'Chip8 emulator',
    link: 'https://github.com/Kurppa/chip8',
    date: '2018'
  },
]

const Projectspage = () => {

  return (
    <Card.Group style={{ overflow: 'hidden' }} itemsPerRow={2} centered>
      {
        cardData.map(project => 
          <ProjectCard
            key={project.header}
            project={project} 
          />
        )
      }
    </Card.Group>
  )

}

export default Projectspage
