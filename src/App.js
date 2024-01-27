import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/newsapp' element = {<News key="general" country = "in" pagesize ={20} category = "general"/>}> </Route>
          <Route exact path='/' element = {<News key="general" country = "in" pagesize ={20} category = "general"/>}> </Route>
          <Route exact path='/technology' element = {<News key="technology" country = "in" pagesize ={20} category = "technology"/> }></Route>
          <Route exact path='/sports' element = {<News key="sports" country = "in" pagesize ={20} category = "sports"/> }></Route>
          <Route exact path='/science' element = {<News key="science" country = "in" pagesize ={20} category = "science"/> }></Route>
          <Route exact path='/health' element = {<News key="health" country = "in" pagesize ={20} category = "health"/> }></Route>
          <Route exact path='/entertainment' element = {<News key="entertainment" country = "in" pagesize ={20} category = "entertainment"/> }></Route>
          <Route exact path='/business' element = {<News key="business" country = "in" pagesize ={20} category = "business"/> }></Route>
          <Route exact path='/general' element = {<News key="general" country = "in" pagesize ={20} category = "general"/> }></Route>
        </Routes>
        
        </Router>
      </div>

    )
  }
}


export default App;
