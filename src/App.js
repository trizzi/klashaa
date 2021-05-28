import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components /pages/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home />

        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
