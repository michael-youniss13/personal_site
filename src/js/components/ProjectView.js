import React from 'react';

import ProjectTileRow from './ProjectTileRow';

export default class ProjectView extends React.Component {
  render() {
    return(
      <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: '30px' }}>
        <ProjectTileRow />
        <ProjectTileRow />
      </div>
    )
  }
}
