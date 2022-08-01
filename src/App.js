import React from 'react';
import './App.css';
import Home from './component/Home';
import { Component } from 'react';
// import Shipping from './component/Shipping';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './mainlayout';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <MainLayout>
        <Route path = "/" component={Home} />
       
      </MainLayout>
      </BrowserRouter>
    )
  }
}


export default App;
