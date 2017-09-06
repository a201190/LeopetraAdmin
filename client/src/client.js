import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

let history = createHistory();

export default class Client extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}
