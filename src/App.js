import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/styles.scss';

import Home from './pages/Home';
import About from './pages/About';
import Status from './pages/Status';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />
          <Route path='/status' component={Status} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;