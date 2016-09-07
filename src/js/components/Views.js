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
        description: 'For a mathematical encryption class I wrote a paper about the mathematics underlying bitcoin',
        link: 'Click here to read the paper'
      },
      {
        tileName:'Tetris Project',
        imageURL: 'TetrisLogo.png',
        description: 'For a computer science class I programmed Tetris in Java',
        link: 'Click here to play'
      },
      {
        tileName:'Rocket Software Internship',
        imageURL: 'RocketSoftwareLogo.png',
        description: 'The summers of 2013 and 2014 I worked on projects from mobile apps to network programming and researched big data',
        link: ''
      },
      {
        tileName:'Pluralsight Internship',
        imageURL: 'PluralsightLogo.png',
        description: 'During the summer of 2015 I worked on building a menu out for their web application',
        link: ''
      },
      {
        tileName:'IBM Internship',
        imageURL: 'IBMLogo.png',
        description: 'I built a UI component in react for a chat client for user feedback',
        link: ''
      },
      {
        tileName: 'Deck of Cards',
        imageURL: 'DeckOfCards.png',
        description: 'I built a virtual deck of cards which is  shuffleable and  dealable'
      },
      {
        tileName: 'Website',
        imageURL: 'BackgroundPhoto_1.png',
        description: 'I built this entire website'
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
      <div style={{ paddingTop: '100px', backgroundColor: Colors.WHITE, width: '70%' }}>
        Welcome to my website. My name is Michael Youniss and I am {years} years old.
        I am a senior at the University of Pennsylvania and pursuing a Bachelors degree in Logic, Information and Computation.
        The courses I completed for this degree focus on Math, Computer Science and Philosophy. Outside of the classroom I
        enjoy working out, cooking meals, playing music or coding. When I am not a school I like to travel around the world as well as
        explore various national parks.

        I have coded this website myself using the following technologies: Javascript, React.js, Webpack, Babel, and Scss.

        Feel free to look around and reach out to me  with any inquiries.
      </div>
    )
  }
}


export class FindMeView extends React.Component {
  render() {
    let findMeViewStyle = {
      color: Colors.PRIMARY_COLOR,
      fontSize: '40px',
      width: '100%',
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
