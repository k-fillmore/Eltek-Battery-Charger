import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Config from './components/Config'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Router>
        <Switch>
          <Route path="/Dashboard">
            <div>Dashboard</div>
          </Route>
          <Route path="/Config">
            <Config></Config>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
