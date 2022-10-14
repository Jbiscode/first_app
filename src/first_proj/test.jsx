import React from 'react';
import ReactDOM from 'react-dom/client';

const name ='재빈';
const element = <h1>안녕하세요, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);