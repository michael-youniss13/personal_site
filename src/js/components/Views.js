import React from 'react';

import ProjectTileRow from './ProjectTileRow';

import  { Colors } from '../../Constants'
import { FaGithubSquare, FaPhoneSquare, FaSpotify, FaLinkedinSquare } from 'react-icons/lib/fa';
import { MdEmail } from 'react-icons/lib/md';
import { FaDownload } from 'react-icons/lib/fa';

import my_pic from '../../img/photos/me.jpg'
import resume_photo from '../../img/photos/Resume.png';
import resume_pdf from '../../img/pdf/Michael-Youniss-Resume.pdf';

import background from '../../img/photos/Background.png';
import ibm_pic from '../../img/photos/IBMLogo.png';
import bitcoin_pic from '../../img/photos/BitCoinLogo.png';
import pluralsight_logo from '../../img/photos/PluralsightLogo.png';
import rocket_logo from '../../img/photos/RocketSoftwareLogo.png';
import tetris_logo from '../../img/photos/TetrisLogo.png';
import deck_of_cards from '../../img/photos/DeckOfCards.png';

import bitcoin_paper from '../../img/pdf/bitcoin-paper.pdf';
import tetris_jar from '../../img/jar/Tetris.jar';


export class ProjectView extends React.Component {
  render() {
    const projectList = [
      {
        key: '1',
        tileName: 'Website',
        image: background,
        description: 'I coded this website from scratch using Javascript and Sass. I used Webpack to build the website. The website is deployed and hosted on Netlfiy',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/michael-youniss13.github.io',
          content: 'View Git repository'
        }]
      },
      {
        key: '2',
        tileName:'IBM Internship',
        image: ibm_pic,
        description: 'For the duration of the summer of 2016, I built a UI component in Javascript using the React.js framework. The UI component gathered user feedback and sent it to a database.',
        link: []
      },
      {
        key: '3',
        tileName:'Bitcoin Paper',
        image: bitcoin_pic,
        description: 'For Math 341: A Mathematical Introduction to Cryptography, I wrote a paper on the mathematics underlying Bitcoin technology.',
        link: [{
          type: 'download',
          href: bitcoin_paper,
          content: 'Read Paper'
        }]
      },
      {
        key: '4',
        tileName:'Pluralsight Internship',
        image: pluralsight_logo,
        description: 'During the summer of 2015 I built a UI component for the Pluralsight web application. The component was a menu for navigating the application. I used the React.js Javascript framework to build the component.',
        link: []
      },
      {
        key: '5',
        tileName:'Rocket Software Internship',
        image: rocket_logo,
        description: 'During the summers of 2013 and 2014, my internship responsibilities at Rocket Software included programming iOS applications, researching big data, and programming network applications in Java.',
        link: []

      },
      {
        key: '6',
        tileName:'Tetris Project',
        image: tetris_logo,
        description: 'As a final project for CIS 120: Programming Langugaes and Techniques, I coded Tetris in Java.',
        link: [{
          type: 'link',
          href: 'https://github.com/michael-youniss13/Tetris',
          content: 'View Git repository'
        },
        {
          type: 'download',
          href: tetris_jar,
          content: 'Download game'
        }]
      },
      {
        key: '7',
        tileName: 'Game of War',
        image: deck_of_cards,
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
          <p style={{ marginTop: 0 }}>  Hey, welcome to my website!</p>
          <p>I am an MBA candidate at Columbia Business School that's passionate about investing. Before that, I was a Product Manager for two startups (Allma, Salsify) and for Capital One.</p>
          <p>I graduated from UPenn in 2017 with a B.A. in Logic, Information, and Computation, studying 
            math, physics, philosophy, and computer science. I spent my summers as an undergraduate interning as a Junior Software Engineer for three tech companies.</p>  
          <p>Outside of work I spend my time training for marathons, making homemade pasta, and backpacking in national parks.</p>

          <p>I built this website to share the work I've done in my free time.</p>

          <p>Click around and check out my work.</p>

        </div>
        <div className='about-me__photo-wrapper'>
          <img className='about-me__photo' src={my_pic} />
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
        
        <a href={resume_pdf} className='resume-download' target='_0'>
          <div className='resume-download__text'>Download</div>
        </a>
        <img src={resume_photo} className='resume__pic' />
      </div>
    )
  }
}
