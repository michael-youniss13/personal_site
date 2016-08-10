import React from 'react';

import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import GoMarkGithub from 'react-icons/lib/go/mark-github'

export default class ContactView extends React.Component {

  render() {

    return (
      <div style={{ fontSize: '40px', textAlign: 'center', paddingTop: '25px'}}>
        <div><FaEnvelope style={{ display: 'inline-block', paddingRight: '10px'}}/><div style={{ display: 'inline-block' }}>michael.youniss13@gmail.com</div></div>
        <div><FaPhone style={{ display: 'inline-blcok', paddingRight: '10px'}} /><div style={{ display: 'inline-block' }}>(781) 801-5163</div></div>
        <div><GoMarkGithub style={{ display: 'inline-block', paddingRight: '10px' }} /><div style={{ display: 'inline-block' }}>Michael-Youniss13</div></div>
      </div>
    )
  }
}
