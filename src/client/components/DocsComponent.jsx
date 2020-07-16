import React from 'react';

function DocsComponent(props) {
  return (
    <div hidden={props.view !== props.index}>
      <div>docs</div>
    </div>
  );
}

export default DocsComponent;
