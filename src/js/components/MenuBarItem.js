import React from 'react';
import { Colors } from '../../Constants';

export default class MenuBarItem extends React.Component {

  constructor() {
    super();
    this.state = { mouseHovering: false};
  }

  handleMouseEnter() {
    this.setState({ mouseHovering: true });
  }

  handleMouseLeave() {
    this.setState({ mouseHovering: false });
  }

  render() {
    const activeItem = this.props.item.view === this.props.currentView;
    let menuItemStyle = {
      display: 'inline-block',
      width: '17%',
      fontWeight: '100',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: '20px'
    };

    activeItem ? menuItemStyle.color = Colors.ACCENT_COLOR : menuItemStyle.color = Colors.TEXT_COLOR;
    this.state.mouseHovering ? menuItemStyle.borderBottom = 'solid 2px ' + Colors.ACCENT_COLOR :  menuItemStyle.borderBottom = 'solid 2px transparent';

    return(
      <div  style={ menuItemStyle }
            onClick={ () => { this.props.handleClick(this.props.item.view) }}>
        <div  onMouseEnter={ this.handleMouseEnter.bind(this) }
              onMouseLeave={ this.handleMouseLeave.bind(this) }>
          {this.props.item.title}
        </div>
      </div>
    )
  }
}

MenuBarItem.PropTypes = {
  item: React.PropTypes.object,
  handleClick: React.PropTypes.func,
  currentView: React.PropTypes.string
}
