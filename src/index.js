import React from 'react'
import ReactDOM from 'react-dom'
import Intro from './pages/Intro/Intro'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
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
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    }
  }
});

ReactDOM.render(
  <Router>
    <Route
      render={({ location }) => ( 
        <MuiThemeProvider theme={theme}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={InitialPage} />
              </Switch>
            </CSSTransition>  
          </TransitionGroup>  
        </MuiThemeProvider>
      )}
    /> 
  </Router>
, document.getElementById('root'))

registerServiceWorker()
