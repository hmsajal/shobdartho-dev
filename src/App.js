import React from 'react';
import {MemoryRouter,Route} from 'react-router-dom'

import './App.css';
import Menu from './components/menu'
import Home from './components/home'
import Pal from './components/pal'

export default function App() {
  return (
    <MemoryRouter>
       <Menu/>       
       <Route exact path="/" component={Home}/>
       <Route path="/pal" component={Pal}/>                     
    </MemoryRouter>
  );
}

