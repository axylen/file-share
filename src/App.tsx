import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from 'Pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/:id">
            Share Page
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
