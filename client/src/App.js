import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import WordPage from './components/WordPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/words/:dateId" component={WordPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App