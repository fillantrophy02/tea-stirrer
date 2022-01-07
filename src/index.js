import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import WaitingPage from './pages/WaitingPage';
import FlashingPageChosen from './pages/FlashingPageChosen';
import 'bootstrap/dist/css/bootstrap.min.css'; // need to use this cause incompatibility btw react-bootstrap and bootstrap

ReactDOM.render(
  <React.StrictMode>
    {/* <LandingPage /> */}
    <FlashingPageChosen />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
