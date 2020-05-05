import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Header from './Header';
import Smurf from "./Smurf";
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/smurf/:smurfId" component={Smurf} />
          <Route path="/add" component={AddSmurf} />
          <Route
              path='/update/:smurfId'
              render={(props) => <AddSmurf {...props} toUpdate={true} />}
            />
          <Route exact path="/" component={SmurfList} />
        </Switch>
      </div>
    </Router>
  );
}
