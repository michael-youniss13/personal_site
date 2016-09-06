import React from 'react';
import MenuBarItem from './MenuBarItem';

import { Colors } from '../../Constants';

export default class TitleBar extends React.Component {
	render() {
		let headerStyle = {
			color: Colors.TEXT_COLOR,
			fontFamily: 'Helvetica, Sans-Serif',
			textAlign: 'center',
			width: '100%'
		};

		let titleStyle = {
			fontSize: '50px',
			fontWeight: '100'
		};

		return(
			<div style={headerStyle}>
				<div style={titleStyle}>MICHAEL YOUNISS</div>
				<MenuBar menuItems={this.props.menuItems} handleClick={this.props.handleClick} currentView={this.props.currentView} />
			</div>
		)
	}
}

TitleBar.PropTypes = {
	menuItems: React.PropTypes.array,
	handleClick: React.PropTypes.func,
	currentView: React.PropTypes.string
}


class MenuBar extends React.Component {
	render() {
	let key= 0;

		return (
			<div>
				{this.props.menuItems.map((item) => {
					return (<MenuBarItem item={item} currentView={this.props.currentView}
					 handleClick={this.props.handleClick} key={key++} />)
				 })}
			</div>
		)}
}

MenuBar.PropTypes = {
	menuItmes: React.PropTypes.array,
	handleClick: React.PropTypes.func,
	currentView: React.PropTypes.string
}
