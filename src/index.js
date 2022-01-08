import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import WaitingPage from './pages/WaitingPage';
import FlashingPageChosen from './pages/FlashingPageChosen';
import QuestionPage from './pages/QuestionPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // need to use this cause incompatibility btw react-bootstrap and bootstrap
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
   <Route path="/waiting-page" element={<WaitingPage/>} />
   <Route path="/flashing-page-chosen" element={<FlashingPageChosen/>} />
   <Route path="/question-page" element={<QuestionPage/>} />
    <Route path="/" element={<LandingPage />} />
    {/* <Route path="/responses-loading" render={() => window.location.href="./pages/responses-loading.html"} /> */}
 </Routes>
 </BrowserRouter>
 </React.StrictMode>,
 rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
