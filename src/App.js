import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Discover from "./pages/discover/discover";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/discover" component={Discover} />
          <Redirect to="/discover?teamID=1&sort=alphabetical" />
        </Switch>
      </Router>
    </div>  
  );
}

export default App;

