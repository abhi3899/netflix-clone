import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyles} from './global-styles'
import {firebase} from './lib/firebase.prod'
import {FirebaseContext} from './Context/Firebase'



ReactDOM.render(
<>
<FirebaseContext.Provider value={{firebase}}>
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
  </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
