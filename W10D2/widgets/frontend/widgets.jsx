import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';


let tab1 = {title: 'one', content: 'I am the first'};
let tab2 = { title: 'two', content: 'I am the second' };
let tab3 = { title: 'three', content: 'I am the third' };

let tab = [tab1,tab2,tab3];
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const root2 = document.getElementById('root2');
  const root3 = document.getElementById('root3');
  // let clock = new Clock();
  ReactDOM.render(<Clock />, root);
  ReactDOM.render(<Tabs panes={tab} />, root2);
  ReactDOM.render(<Weather />, root3);
});
