import React from 'react';

const AppHeader = ({onTriggerClicked = () => {}}) => (
  <header>
    <button onClick={onTriggerClicked}>=</button> Header
  </header>
);

export default AppHeader;