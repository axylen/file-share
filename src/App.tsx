import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from 'Pages/Home';
import Share from 'Pages/Share';

function App() {
  if (!RTCDataChannel) {
    return (
      <div className="App">
        <h1 style={{ textAlign: 'center', fontWeight: 600 }}>Your browser doesn't support used technology :(</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <HashRouter>
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
