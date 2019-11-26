import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import PearlJam from './components/PearlJam'
import RedHotChiliPeppers from './components/RedHotChiliPeppers'
import Everclear from './components/Everclear'
import NavBar from './components/NavBar'
// import Bands from './components/Bands'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          {/* <Route exact path="/:category" component={Bands}></Route> */}
          <Route exact path="/pearl-jam" component={PearlJam}></Route>
          <Route
            exact
            path="/red-hot-chili-peppers"
            component={RedHotChiliPeppers}
          ></Route>
          <Route exact path="/everclear" component={Everclear}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
