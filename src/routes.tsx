import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Login} from './pages/Login';
import {Character} from './pages/Character';
import {Movie} from './pages/Movie';
import {HQ} from './pages/HQ';



function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/> 
        <Route path ='/personagem' component={Character}/>
        <Route path ='/filmes' component={Movie}/>
        <Route path ='/hq' component={HQ}/>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;