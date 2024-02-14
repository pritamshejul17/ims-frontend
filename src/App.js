
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
import AddFolder from './Components/AddFolder';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addcategory">
            <AddFolder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
