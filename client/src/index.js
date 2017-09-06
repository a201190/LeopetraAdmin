import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Client from './client';
import registerServiceWorker from './registerServiceWorker';

import './app.scss';

ReactDOM.render(<Client />, document.getElementById('root'));
registerServiceWorker();
