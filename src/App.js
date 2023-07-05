import './App.css';
import Home from './Home';
import Project from './Project';
import {BrowserRouter as Router, Route,Switch}from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <switch>
        <Route exact path="/" >
            <Home />
        </Route>
        <Route exact path="/projects" >
            <Project/>
        </Route>
        </switch>        
      </div>
    </Router>
  );
}

export default App;
