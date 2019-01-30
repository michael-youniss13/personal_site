import React from 'react';

import ProjectTile from './ProjectTile';

export default class ProjectTileRow extends React.Component {
  render() {
    let key = 0;
    return(
      <div style={{ textAlign: 'center', verticalAlign: 'middle', paddingTop: '8%' }}>
        {
          this.props.projectList.map((project) => {
            return <ProjectTile tileName={project.tileName}
                                imageURL={project.imageURL}
                                description={project.description}
                                link={project.link}
                                key={key++}/>
          })
        }
      </div>
    )
  }
}


/*
<ProjectTile tileName={'Bit Coin Paper'} imageURL={'BitCoinLogo.png'}/>
<ProjectTile tileName={'Rocket Software Internship'} imageURL={'RocketSoftwareLogo.png'}/>
<ProjectTile tileName={'Pluralsight Internship'} imageURL={'PluralsightLogo.png'}/>
<ProjectTile tileName={'IBM Internship'} imageURL={'IBMLogo.png'}/>
<ProjectTile tileName={'Tetris Project'} imageURL={'TetrisLogo.png'}/>
*/

ProjectTileRow.PropTypes = {
  projectList: React.PropTypes.array
}
