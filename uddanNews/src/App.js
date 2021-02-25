import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import SourcePage from './components/SourcePage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Header/>
           <Switch>
               <Route path='/' exact component={()=><Dashboard/>}/>
               <Route path='/page2' exact component={()=><SourcePage/>}/>
           </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
