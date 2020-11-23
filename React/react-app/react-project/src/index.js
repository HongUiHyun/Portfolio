import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Myname from './mycomponent';
import reportWebVitals from './reportWebVitals';

function tick(){
  const element = (
    <div>
      <h1> Time!</h1>
  <div> It is {new Date().toLocaleTimeString()}</div>
    </div>
  );
  ReactDOM.render(element,document.querySelector('.timeStep'));
}

setInterval(tick, 1000);
ReactDOM.render(
    <App />
 ,
  document.getElementById('root')
);

ReactDOM.render(
  <Myname/>
,
document.querySelector('.counter')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
