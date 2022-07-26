import React from 'react';
import ReactDOM from 'react-dom/client';
import Entrance from './Entrance';
import './global.sass';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Entrance />
  </React.StrictMode>
);
