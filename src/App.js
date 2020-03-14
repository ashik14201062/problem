import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header'

import Friends from './components/Friends/Friends';



function App() {
  const Product =[{name:'S.M. Ashiqur Rahman' , selary: '24000' }]
  return (
    <div >
      <Header> </Header>
     <Friends></Friends>
     
    </div>
  );
}

export default App;
