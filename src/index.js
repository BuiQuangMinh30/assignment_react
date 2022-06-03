import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import { StateProvider } from './StateProvider';
import reducer, { initialState } from './redux/reducer';
ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState}
    reducer={reducer}>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


