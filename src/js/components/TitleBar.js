import React from 'react';
import MenuBarItem from './MenuBarItem';

export default class TitleBar extends React.Component {
	render() {

		return(
			<div>
				<div>MICHAEL YOUNISS</div>
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
