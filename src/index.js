import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const appDiv = document.getElementById('app');
appDiv.innerHTML = <h1>{}</h1>;
appDiv.appendChild('h1');


const arr = [
  {name: 'paco', id: 1},
  {name: 'jose', id: 2},
];


const found = arr.find((usuario) => usuario.id === 1);

found.name = 'luis';

console.log(found);
console.log(arr);




