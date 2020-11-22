import _ from 'lodash';
import './style.css';
import Icon from './images/favicon.png';
import printMe from './javascript/print.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

  
    btn.innerHTML = 'Click me and check the console!';
     btn.onclick = printMe;

  element.appendChild(btn);

  
    return element;
  }
  
  document.body.appendChild(component());

