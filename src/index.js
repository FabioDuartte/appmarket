import React from 'react';
import ReactDOM  from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/Routers'

ReactDOM.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

