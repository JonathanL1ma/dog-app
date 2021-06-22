import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Breed from '../pages/Breed';
import SubBreed from '../pages/SubBreed';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/breed/:breedName' component={ Breed } />
        <Route exact path='/subbreed/:breedName/:subBreedName' component={ SubBreed } />
      </Switch>
    </BrowserRouter>
  )
}

export default App
