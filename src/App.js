import React from 'react';
import './App.css';
import AddEmployee from './Comphonents/Header/AddEmployee/AddEmployee';
import Header from './Comphonents/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Comphonents/NotFound/NotFound';
import Mainheader from './Comphonents/MainHeader/Mainheader';

function App() {
  return (
    <div>
      <Mainheader></Mainheader>
    <Router>
      <Switch>
        
          <Route exact path="/" component={Header}>
          </Route>
          <Route path="/AddEmployee" component={AddEmployee}>
          </Route>
          <Route path="/Home" component={Header}>

          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
