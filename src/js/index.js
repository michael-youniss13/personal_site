import React from 'react';
import ReactDOM from 'react-dom';
import { ProjectView, AboutView, FindMeView, ResumeView } from '../js/components/Views';
import TitleBar from './components/TitleBar'
import { Colors, Views } from '../Constants'

import '../img/sass/main.scss';

class Webpage extends React.Component {
	constructor() {
		super()
		this.state = { currentView: Views.ABOUT }
	}

	handleMenuItemClick(input) {
		this.setState({ currentView: input });
	}

	render() {

		const MenuItems = [
			{title: 'ABOUT', view: Views.ABOUT },
			{title: 'PROJECTS', view: Views.PROJECTS },
			{title: 'FIND ME', view: Views.FIND_ME },
			{title: 'RESUME', view: Views.RESUME }
		];

		return(
			<div>
				<TitleBar menuItems={MenuItems} currentView={this.state.currentView} handleClick={ this.handleMenuItemClick.bind(this) }/>
				{this.state.currentView === Views.ABOUT && <AboutView />}
				{this.state.currentView === Views.PROJECTS && <ProjectView />}
				{this.state.currentView === Views.RESUME && <ResumeView />}
				{this.state.currentView === Views.FIND_ME && <FindMeView />}
			</div>
		);
	}
}

ReactDOM.render(<Webpage/>, document.getElementById('root'));
