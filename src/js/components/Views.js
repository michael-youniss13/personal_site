import React from 'react';

import ProjectTileRow from './ProjectTileRow';

import  { Colors } from '../../Constants'

import { FaGithubSquare, FaPhoneSquare, FaSpotify, FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';

export class ProjectView extends React.Component {
  render() {
    const projectList = [
      {
        tileName:'Bit Coin Project',
        imageURL: 'BitCoinLogo.png',
        description: 'For Math 341: A Mathematical Introduction to Cryptography, I wrote a paper on the mathematics underlying Bitcoin technology.',
        link: {
          type: 'download',
          path: './src/img/pdf/bitcoin-final-paper-math-341.pdf',
          content: 'Click here to read Paper'
        }
      },
      {
        tileName:'Tetris Project',
        imageURL: 'TetrisLogo.png',
        description: 'As a final project for CIS 120: Programming Langugaes and Techniques, I coded Tetris in Java.',
        link: 'Click here to play'
      },
      {
        tileName:'Rocket Software Internship',
        imageURL: 'RocketSoftwareLogo.png',
        description: 'During the summers of 2013 and 2014, my internship responsibilities at Rocket Software included programming iOS applications, researching big data, and programming network applications in Java.',
        link: ''
      },
      {
        tileName:'Pluralsight Internship',
        imageURL: 'PluralsightLogo.png',
        description: 'During the summer of 2015 I worked on building a UI component for the Pluralsight web application. The component was a menu for navigating the application and I built it in Javascript using the React.js framework.',
        link: ''
      },
      {
        tileName:'IBM Internship',
        imageURL: 'IBMLogo.png',
        description: 'For the duration of the summer of 2016, I built a UI component in Javascript using the React.js framework. The UI component gathered user feedback and sent it to a database.',
        link: ''
      },
      {
        tileName: 'Deck of Cards',
        imageURL: 'DeckOfCards.png',
        description: 'In my free time I built a deck of playing cards in Java. The deck is allows the user to shuffle the cards, deal the cards, and simulate a game of war. The code can be found on my github page, which can be found in the \'Find Me\' tab.'
      },
      {
        tileName: 'Website',
        imageURL: 'BackgroundPhoto_1.jpg',
        description: 'Using Javascript, React.js, Webpack, Babel, and Scss I built this website. All the code can be found on my github page, which can be found in the \'Find Me\' tab'
      }
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
    var ageDiffInMs = Date.now() - (new Date('2/13/1995').getTime());
    var diff = new Date(ageDiffInMs);
    var years = (diff.getUTCFullYear() - 1970);
    return(
      <div className='about-me'>
        <p style={{ marginTop: 0 }}>Welcome to my website. My name is Michael Youniss and I am {years} years old.
        I am a senior at the University of Pennsylvania and pursuing a Bachelors degree in Logic, Information and Computation.
        The courses I completed for this degree focus on Math, Computer Science and Philosophy. Outside of the classroom I
        enjoy trainging for marathons, cooking meals, playing music or coding. When I am not a school I like to travel around the world as well as
        explore various national parks.</p>

        <p>I coded this website using the following technologies: Javascript, React.js, Webpack, Babel, and Scss.</p>

        <p style={{ marginBottom: 0 }}>Feel free to look around and reach out to me  with any inquiries.</p>
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
        <a className='find-me-box' href="mailto:michael.youniss13@gmail.com" ><MdEmail className='find-me-icon'/><div className='find-me-content'>michael.youniss13@gmail.com</div></a>
        <div className='find-me-box'><FaPhoneSquare className='find-me-icon'/><div className='find-me-content'>(781) 801-5163</div></div>
        <a href='https://github.com/michael-youniss13' target='_blank' className='find-me-box'><FaGithubSquare className='find-me-icon'/><div className='find-me-content'>Michael-Youniss13</div></a>
        <a className='find-me-box' target='_blank' href='https://www.linkedin.com/in/michael-youniss-8639909a?trk=hp-identity-name'><FaLinkedinSquare className='find-me-icon'/><div className='find-me-content'>Michael Youniss</div></a>
      </div>
    )
  }
}

export class ResumeView extends React.Component {
  render() {
    return(
      <div>HELLO WORLD</div>
    )
  }
}
