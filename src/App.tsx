import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from 'Pages/Home';
import Share from 'Pages/Share';

function App() {
  return (
    <div className="App">
      <HashRouter hashType="noslash">
        <Switch>
          <Route path="/:id">
            <Share />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
