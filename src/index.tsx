import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { stores } from './stores/rootStore';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
