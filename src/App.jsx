import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
// import PearlJam from './components/PearlJam'
// import RedHotChiliPeppers from './components/RedHotChiliPeppers'
// import Everclear from './components/Everclear'
import Bands from './components/Bands'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Pearl-Jam">Pearl Jam</Link>
            </li>
            <li>
              <Link to="/Red-Hot-Chili-Peppers">Red Hot Chili Peppers</Link>
            </li>
            <li>
              <Link to="/Everclear">Everclear</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/:category" component={Bands}></Route>
          {/* <Route exact path="/pearljam" component={PearlJam}></Route>
          <Route
            exact
            path="/redhotchilipeppers"
            component={RedHotChiliPeppers}
          ></Route>
          <Route exact path="/everclear" component={EverClear}></Route> */}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
