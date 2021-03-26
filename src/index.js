import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // sem pridam nejake globalny styly pre elementy <html>, <body> atd

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
