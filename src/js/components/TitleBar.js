import React from 'react';
import MenuBarItem from './MenuBarItem';

import { Colors } from '../../Constants';

export default class TitleBar extends React.Component {
	render() {
		let titleStyle = {
			fontSize: '3.2em',
			fontWeight: '100'
		};

		return(
			<div>
				<div className='frosted-glass'></div>
				<div className='title-bar'>
					<div style={titleStyle}>Michael Youniss</div>
					<MenuBar menuItems={this.props.menuItems} handleClick={this.props.handleClick} currentView={this.props.currentView} />
					</div>
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
