import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drawer from '../src/components/Drawer'

ReactDOM.render(
  <React.StrictMode>
    <Drawer>
      <App />
    </Drawer>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
