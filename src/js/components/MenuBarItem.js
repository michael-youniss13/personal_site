import React from 'react';
import { Colors } from '../../Constants';

export default class MenuBarItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { mouseHovering: false };
  }

  handleMouseEnter() {
    this.setState({ mouseHovering: true });
  }


  handleMouseLeave() {
    this.setState({ mouseHovering: false });
  }

  render() {
    const hoverMenuItemStyle = this.state.mouseHovering ? { color: Colors.ACCENT_COLOR} : { color: Colors.TEXT_COLOR };
    const menuItemStyle = {
      display: 'inline-block',
      width: '15%',
      fontWeight: '100'
    }

    return(
      <div  style={ menuItemStyle }
            onClick={ () => { this.props.handleItemClick(this.props.item.view) }}>
        <div  onMouseEnter={ this.handleMouseEnter.bind(this) }
              onMouseLeave={ this.handleMouseLeave.bind(this) }
              style={hoverMenuItemStyle}>
          {this.props.item.title}
        </div>
      </div>
    )
  }
}

MenuBarItem.PropTypes = {
  item: React.PropTypes.object,
  handleItemClick: React.PropTypes.func
}
