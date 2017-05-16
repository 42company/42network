import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom'

import Home from './routes/home/index'
import Affiliate from './routes/affiliate/index'
import Advertiser from './routes/advertiser/index'


const App = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/affiliate" component={Affiliate} />
      <Route path="/advertiser" component={Advertiser} />
    </div>
  </Router>
)

export default App
