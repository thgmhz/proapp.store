import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './pages/Intro/Intro'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker'

import Home from './pages/Home/Home'
import './assets/css/main.css'

const getInitialPage = () => {
  if ('localStorage' in window) {
    const introAlreadyShown = localStorage.getItem('proappstore_introAlreadyShown')
    return introAlreadyShown ? Home : Intro
  }
  
  return Home
}

const InitialPage = getInitialPage()

ReactDOM.render(
  <Router>
    <Route
      render={({ location }) => ( 
        <React.Fragment>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={InitialPage} />
              </Switch>
            </CSSTransition>  
          </TransitionGroup>  
        </React.Fragment>
      )}
    /> 
  </Router>
, document.getElementById('root'))

registerServiceWorker()
