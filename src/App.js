import './App.css';
import Home from './Home';
import Project from './Project';
import {BrowserRouter as Router, Route,Switch}from 'react-router-dom'
import Achievements from './Achievements';
import ContactMe from './ContactMe';

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
        <Route exact path="/achievements">
            <Achievements/>
        </Route>
        <Route exact path="/contact">
            <ContactMe/>
        </Route>
        </switch>        
      </div>
    </Router>
  );
}

export default App;
