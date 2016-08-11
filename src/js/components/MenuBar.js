import React from 'react'
import { Colors } from '../../Constants'

import MenuBarItem from './MenuBarItem'

export default class MenuBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const menuStyle = {
      fontFamily: 'Helvetica, Sans-Serif',
      fontSize: '25px',
      color: Colors.TEXT_COLOR,
      textAlign: 'center',
      paddingTop: '10px'
    };

    let uniqueKey = 0;

    return(
      <div style={ menuStyle }>
        { this.props.menuBarItems.map((item) => {
          return( <MenuBarItem key={ uniqueKey++ } item={item} handleItemClick={this.props.handleItemClick}
                               currentView={this.props.currentView}/> )
        })}
      </div>
    )
  }
}

MenuBar.PropTypes = {
  menuBarItems: React.PropTypes.array,
  handleItemClick: React.PropTypes.func,
  currentView: React.PropTypes.string
}
