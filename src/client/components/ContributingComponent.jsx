import React from 'react';

function ContributingComponent(props) {
  return (
    <div hidden={props.view !== props.index}>
      <div>contributing</div>
    </div>
  );
}

export default ContributingComponent;
