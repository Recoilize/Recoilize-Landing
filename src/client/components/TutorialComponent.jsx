import React from 'react';

function TutorialComponent(props) {
  return (
    <div hidden={props.view !== props.index}>
      <div>tutorial</div>
    </div>
  );
}

export default TutorialComponent;
