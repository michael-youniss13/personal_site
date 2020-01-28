import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Colors } from '../../Constants';

import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down';


export default class ProjectTile extends React.Component {
  constructor() {
    super();
    this.state = { buttonPress: false, tileHover: false, openProject: false };
  }

  onButtonEnter() {
    this.setState({ buttonPress: true });
  }

  onButtonLeave() {
    this.setState({ buttonPress: false });
  }

  onTileEnter() {
    this.setState({ tileHover: true });
  }

  onTileLeave() {
    this.setState({ tileHover: false });
  }

  handleButtonClick() {
    this.setState({ openProject: !this.state.openProject });
  }

  render() {
    let TileStyle =  {
      display: 'inline-block',
      fontFamily: 'Helvetica, Sans-Sertif',
      verticalAlign: 'top',
      textAlign: 'center',
      color: Colors.TEXT_COLOR,
      margin: '30px',
      width: '200px',
      boxShadow: '0 0 15px 2px rgba(0,0,0, 0.45)'
    };
    this.state.tileHover ?   TileStyle.boxShadow = '0 0 15px 2px rgba(0,0,0, 0.45)' : TileStyle.boxShadow = '0 0 20px 2px rgba(0,0,0, 0.4)';
    let imageURL = './src/img/photos/';
    imageURL = imageURL.concat(this.props.imageURL);

    const TileBodyStyle = {
      width: '200px',
      height: '200px',
      backgroundColor: Colors.WHITE,
    };
    const TileTitleStyle = {
      backgroundColor: Colors.PRIMARY_COLOR_DARK,
      height: '75px',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'table-cell',
      width: '200px',
      fontSize: '120%',
      fontWeight: 'bold'
    };
    const ImageStyle = {
      width: 'inherit',
      height: 'inherit',
      boxShadow: 'inset 0px 10px 10px -5px rgba(0,0,0,0.5)'
    };



    let DescriptionClasses = 'tile ';
    if(this.state.openProject) {
      DescriptionClasses = DescriptionClasses.concat('tile--expanded');
    } else {
      DescriptionClasses = DescriptionClasses.concat('tile--condensed');
    }

    let ButtonClasses = 'button ';
    if (this.state.openProject) {
      ButtonClasses = ButtonClasses.concat(' button--expanded ');
    } else {
      ButtonClasses = ButtonClasses.concat(' button--condensed ');
    }
    if (this.state.buttonPress) {
      ButtonClasses = ButtonClasses.concat(' button--pressed ');
    } else {
      ButtonClasses = ButtonClasses.concat(' button--unpressed ');
    }

    return(
      <div style={TileStyle}
           onMouseEnter={this.onTileEnter.bind(this)}
           onMouseLeave={this.onTileLeave.bind(this)}>
        <div style={TileTitleStyle}>
          {this.props.tileName}
        </div>
        <div className={DescriptionClasses}>
          <p></p>
          {this.props.description}
          {this.props.link.map((link) => {
            if(link.type === 'download') {
              return <p><a href={link.href} target='_0'>{link.content}</a></p>;
            } else if (link.type === 'link') {
              return <p><a href={link.href} target='_0'>{link.content}</a></p>;
            } else  {
              return <div></div>
            }
          })}
        </div>
        <div style={{ height: '0px' }}>
          <MdArrowDropDown className={ButtonClasses}
                                         onClick={this.handleButtonClick.bind(this)}
                                         onMouseDown={this.onButtonEnter.bind(this)}
                                         onMouseUp={this.onButtonLeave.bind(this)}/>
        </div>
        <div style={TileBodyStyle}>
          <img src={imageURL} style={ImageStyle} />
        </div>


      </div>
    )
  }
}

ProjectTile.PropTypes = {
  tileName: React.PropTypes.string,
  imageURL: React.PropTypes.string,
  link: React.PropTypes.string,
  link_path: React.PropTypes.string
}
