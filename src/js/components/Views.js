import React from 'react';

import ProjectTileRow from './ProjectTileRow';

import  { Colors } from '../../Constants'
import { FaGithubSquare, FaPhoneSquare, FaSpotify, FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';
import { FaDownload } from 'react-icons/lib/fa'

export class ProjectView extends React.Component {
  render() {
    const projectList = [
      {
        key: 1,
        tileName: 'Website',
        imageURL: 'Background.png',
        description: 'Using Javascript and Sass I built this website.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/michael-youniss13.github.io',
          content: 'View Git repository'
        }]
      },
      {
        key: 2,
        tileName:'IBM Internship',
        imageURL: 'IBMLogo.png',
        description: 'For the duration of the summer of 2016, I built a UI component in Javascript using the React.js framework. The UI component gathered user feedback and sent it to a database.',
        link: []
      },
      {
        key: 3,
        tileName:'Bitcoin Paper',
        imageURL: 'BitCoinLogo.png',
        description: 'For Math 341: A Mathematical Introduction to Cryptography, I wrote a paper on the mathematics underlying Bitcoin technology.',
        link: [{
          type: 'download',
          href: '/src/img/pdf/bitcoin-final-paper-math-341.pdf',
          content: 'Read Paper'
        }]
      },
      {
        key: 4,
        tileName:'Pluralsight Internship',
        imageURL: 'PluralsightLogo.png',
        description: 'During the summer of 2015 I built a UI component for the Pluralsight web application. The component was a menu for navigating the application. I used the React.js Javascript framework to build the component.',
        link: []
      },
      {
        key: 5,
        tileName:'Rocket Software Internship',
        imageURL: 'RocketSoftwareLogo.png',
        description: 'During the summers of 2013 and 2014, my internship responsibilities at Rocket Software included programming iOS applications, researching big data, and programming network applications in Java.',
        link: []

      },
      {
        key: 6,
        tileName:'Tetris Project',
        imageURL: 'TetrisLogo.png',
        description: 'As a final project for CIS 120: Programming Langugaes and Techniques, I coded Tetris in Java.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/Tetris',
          content: 'View Git repository'
        },
        {
          type: 'download',
          href: '/src/img/jar/Tetris.jar',
          content: 'Download game'
        }]
      },
      {
        key: 7,
        tileName: 'Game of War',
        imageURL: 'DeckOfCards.png',
        description: 'In my free time I built a deck of playing cards in Java. I incorporated shuffling and dealing into the deck of cards. Lastly, I used the deck of cards to build a simple game of war on the terminal.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/Cards',
          content: 'View Git repository'
        }]
      },

    ]

    return(
      <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: '30px' }}>
        <ProjectTileRow projectList={projectList} />
      </div>
    )
  }
}


export class AboutView extends React.Component {
  render() {
    return(
      <div className='about-me'>
        <div className='about-me__writeup'>
          <p style={{ marginTop: 0 }}> Hey, welcome to my website. I am a Product Manager at Capital One. I graduated from the University of Pennsylvania with a degree in Logic, Information and Computation.
          I run marathons (4), cook meals, and read. When I have  more time off, I hike and travel abroad.</p>

          <p>I built this website to share the work I've done in my free time.</p>
          <p>I built this website from scratch using Javascript and Sass.</p>

        </div>
        <div className='about-me__photo-wrapper'>
          <img className='about-me__photo' src='./build/img/photos/me.JPG' />
        </div>
      </div>
    )
  }
}


export class FindMeView extends React.Component {
  render() {
    let findMeViewStyle = {
      color: Colors.PRIMARY_COLOR,
      fontSize: '40px',
      textAlign: 'center',
      paddingTop: '100px'
    }

    return(
      <div style={findMeViewStyle}>
        <a className='find-me-box' href="mailto:michael.youniss13@gmail.com" ><MdEmail className='find-me-icon'/></a>
        <a href='https://github.com/michael-youniss13' target='_blank' className='find-me-box'><FaGithubSquare className='find-me-icon'/></a>
        <a className='find-me-box' target='_blank' href='https://www.linkedin.com/in/michael-youniss-8639909a?trk=hp-identity-name'><FaLinkedinSquare className='find-me-icon'/></a>
      </div>
    )
  }
}

export class ResumeView extends React.Component {
  render() {
    return(
      <div className='resume'>
        <a href='/src/img/pdf/Resume.pdf' className='resume-download' download target='_0'><FaDownload className='download-button'/></a>
        <img src='/src/img/photos/Resume.jpg' className='resume__pic' />
      </div>
    )
  }
}
