import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './first_proj/Library';
import Clock from './clock_proj/clock';
// import Counter1 from './first_proj/Counter1';
// import Counter2 from './first_proj/Counter2';
import { Counter1,Counter2 } from './first_proj/onClick';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Counter1 />
      <Counter2 />
    </React.StrictMode>
  );
}, 1);  

// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();