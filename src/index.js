/*
* 入口js
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'

import App from './components/app/App';


ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/' component={Main}></Route>
    </Switch>
  </HashRouter>
), document.getElementById('app'));

