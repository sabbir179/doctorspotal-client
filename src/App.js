import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import Login from './components/Login/Login/Login';
import AddDoctor from './components/AddDoctor/AddDoctor'



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
            <Route  path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route  path="/allpatients">
              <AllPatients></AllPatients>
            </Route>
            <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
            <Route  path="/login">
                <Login></Login>
            </Route>
        </Switch>
      </Router>
   </UserContext.Provider>
  );
}

export default App;
