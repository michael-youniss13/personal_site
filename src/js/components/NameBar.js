import React from 'react'
import { Colors } from '../../Constants'

export default class NameBar extends React.Component {
  render() {
    const style = {
      fontFamily: 'Helvetica, Sans-Serif',
      fontSize: '55px',
      fontWeight: 'bold',
      color: Colors.TEXT_COLOR,
      textAlign: 'center',
      paddingTop: '20px'
    };

    return(
      <div style={style}>
        MICHAEL YOUNISS
      </div>
    )
  }
}
