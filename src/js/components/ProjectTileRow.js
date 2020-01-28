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

ProjectTileRow.PropTypes = {
  projectList: React.PropTypes.array
}
