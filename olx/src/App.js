import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/signup' >
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
      </Router>
      
   
      
      
    </div>
  );
}

export default App;
