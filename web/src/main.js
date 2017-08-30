import React from 'react';
import {render} from 'react-dom';
import App from './app';

require('./styles/app');

render(<App userId={1} />, document.getElementById('AppRoot'));