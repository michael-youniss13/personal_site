import React from 'react';
import ReactDOM from 'react-dom';
import { ProjectView, AboutMeView, ContactView, ResumeView } from '../js/components/Views';
import MenuBar from './components/MenuBar'
import { Colors } from '../Constants'

import '../img/sass/main.scss';

class Webpage extends React.Component {
	render() {
		console.log('webpage as fuck');	
		console.log(Colors);	
		return(
			<div>
				<MenuBar />	
				<ProjectView />
				<AboutMeView />
				<ContactView />
				<ResumeView />
			</div>
		);
	}
}

ReactDOM.render(<Webpage/>, document.getElementById('root'));