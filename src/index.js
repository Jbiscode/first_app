import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import UseRef from './useRef/UseRef1';
import Timer from './usingHooks/Timer';
// import ClockState2 from './usingHooks/ClockState2';
// import ClockState3 from './usingHooks/ClockState3';
import UseEffect1 from './usingHooks/UseEffect1';

// import Library from './first_proj/Library';
// import Clock from './clock_proj/clock';
// import Counter1 from './usingHooks/Counter1';
// import Counter2 from './usingHooks/Counter2';
// import { Counter1,Counter2 } from './usingHooks/onClick';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UseRef/>
  </React.StrictMode>
);


// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();