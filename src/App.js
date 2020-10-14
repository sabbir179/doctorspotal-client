import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboad/Dashboard/Dashboard';



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route  path="/dashboard/appointment">
              <Dashboard></Dashboard>
            </Route>
            <Route  path="/login">
            
            </Route>
        </Switch>
      </Router>
   </UserContext.Provider>
  );
}

export default App;
