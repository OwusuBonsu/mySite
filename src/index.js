import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navi from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Resume from './resume';

ReactDOM.render(
  <BrowserRouter>
  <Helmet bodyAttributes={{style: 'background-color : #6A717F'}}/>
    <Navi />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Resume" component={Resume} />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
