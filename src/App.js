import React from 'react';
import {MemoryRouter,Route} from 'react-router-dom'

import './App.css';
import Menu from './components/menu'
import Dictionary from './components/dictionary'

export default function App() {
  return (
    <MemoryRouter>
       <Menu/>             
       <Route path="/" component={Dictionary}/>          
    </MemoryRouter>
  );
}

