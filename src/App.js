
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Dashboard from './Pages/DashBoard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
