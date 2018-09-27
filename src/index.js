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
import './assets/css/main.css'

ReactDOM.render(
  <Router>
    <Route
      render={({ location }) => ( 
        <React.Fragment>
          <Route exact path="/" component={Intro} />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Intro} />
              </Switch>
            </CSSTransition>  
          </TransitionGroup>  
        </React.Fragment>
      )}
    /> 
  </Router>
, document.getElementById('root'))

registerServiceWorker()
