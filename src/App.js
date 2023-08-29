import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about"><News pageSize={5} country="in" category="about" /></Route>
            <Route path="/business"><News pageSize={5} country="in" category="busines" /></Route>
            <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment" /></Route>
            <Route path="/genral"><News pageSize={5} country="in" category="genral" /></Route>
            <Route path="/health"><News pageSize={5} country="in" category="health" /></Route>
            <Route path="/science"><News pageSize={5} country="in" category="science" /></Route>
            <Route path="/sports"><News pageSize={5} country="in" category="sports" /></Route>
            <Route path="/technology"><News pageSize={5} country="in" category="technology" /></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
