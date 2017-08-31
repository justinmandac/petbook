import React from 'react';

const AppHeader = ({onTriggerClicked = () => {}}) => (
  <header className="header">
    <button onClick={onTriggerClicked}>=</button> Header
  </header>
);

export default AppHeader;