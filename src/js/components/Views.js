import React from 'react';

import ProjectTileRow from './ProjectTileRow';
import MenuBar from './MenuBar'

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
      }
    ]


    return(
      <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: '30px' }}>
        <ProjectTileRow projectList={projectList} />
      </div>
    )
  }
}


export class AboutMeView extends React.Component {
  render() {
    return(
      <div>HELLO WORLD</div>
    )
  }
}


export class ContactView extends React.Component {
  render() {
    return(
      <div>HELLO WORLD</div>
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