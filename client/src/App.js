import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
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
            <div>Config</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
