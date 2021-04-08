import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Portfolio } from './Portfolio';

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
