import React from 'react';

import { Colors } from '../../Constants'

import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';
import GoMarkGithub from 'react-icons/lib/go/mark-github'

export default class ContactView extends React.Component {

  render() {
    const contactViewStyle = {
      textAlign: 'center',
      paddingTop: '30px'
    };

    const contactStyle = {
      fontSize: '40px',
      paddingTop: '10px',
      paddingBottom: '5px',
      fontFamily: 'Helvetica, Sans-Serif',
      fontWeight: '200'
    };

    const iconStyle = {
      display: 'block',
      fontSize: '40px',
      paddingRight: '15px',
      paddingTop: '13px',
      paddingBottom: '8px',
      color: Colors.PRIMARY_COLOR
    };

    return (
      <div style={contactViewStyle}>
        <div style={{ display: 'inline-block', textAlign: 'right', paddingRight: '30px', verticalAlign: 'bottom' }}>
          <FaEnvelope style={iconStyle}/>
          <FaPhone style={iconStyle} />
          <GoMarkGithub style={iconStyle} />
        </div>
        <div style={{ display: 'inline-block', textAlign: 'left', verticalAlign: 'bottom' }}>
          <div style={contactStyle}>michael.youniss13@gmail.com</div>
          <div style={contactStyle}>(781) 801-5163</div>
          <div style={contactStyle}>Michael-Youniss13</div>
        </div>
      </div>
    )
  }
}
