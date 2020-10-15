import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
