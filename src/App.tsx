import React from 'react';
import './App.css';
import Homepage from './container/Homepage';
import Personpage from './container/Personpage';
import Farmpage from './container/Farmpage';
import Speciespage from './container/Speciespage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/farmpage" component={Farmpage}/>
        <Route path="/personpage" component={Personpage}/>
        <Route path="/speciespage" component={Speciespage}/>
      </Switch>
    </Router>
  </div>
    
  );
}

export default App;
