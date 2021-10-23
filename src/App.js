import './App.css';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Favourites from './pages/Favourites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import { Redirect } from 'react-router';
import UserContext from './Contexts/context';

function App() {

  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Switch>
          <Route path="/favourites">
            {user?
              <Favourites/>:
              <Redirect to="/register"/>
            }
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            {user?
              <Main/>:
              <Redirect to="/register"/>
            } 
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;