import React from 'react';

import NameBar from './NameBar';
import MenuBar from './MenuBar';

import { Views } from '../../Constants';

export default class Webpage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentView: Views.ABOUT_ME_VIEW }
  }

  handleMenuItemClick(view) {
    this.setState({ currentView: view });
  }

  renderContentView() {
    switch(this.state.currentView) {
      case Views.ABOUT_ME_VIEW:
        return ( <div> ABOUT ME </div> );
      case Views.PROJECTS_VIEW:
        return ( <div> PROJECTS </div> );
      case Views.CONTACT_VIEW:
        return ( <div> CONTACT </div> );
      case Views.RESUME_VIEW:
        return ( <div> RESUME </div> );
      default:
        return ( <div> DEFAULT </div> );
    }
  }

  render() {
    const handleMenuItemClick = this.handleMenuItemClick.bind(this);
    const menuBarItems = [
      { title: 'ABOUT', view: Views.ABOUT_ME_VIEW },
      { title: 'PROJECTS', view: Views.PROJECTS_VIEW },
      { title: 'CONTACT',view: Views.CONTACT_VIEW },
      { title: 'RESUME', view: Views.RESUME_VIEW }
    ];

    return(
      <div>
        <NameBar />
        <MenuBar menuBarItems={ menuBarItems } handleItemClick={ handleMenuItemClick }/>
        {this.renderContentView()}
      </div>
    )
  }

}
