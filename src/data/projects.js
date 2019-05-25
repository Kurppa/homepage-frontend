import Chip8pingpong from '../images/Chip8pingpong.png'
import gol from '../images/gol.png'
import convoImage from '../images/convoImage.png'
import thisPage from '../images/thisPage.png'

//text, link, header, imgLink, date(optional)
export const cardData = [
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
    date: '2019'
  },
  {
    text: 'Source code for the frontend of this site is freely available',
    imgLink: thisPage,
    header: 'This site',
    link: 'https://github.com/Kurppa/personal-site',
    date: '2019'
  },
]