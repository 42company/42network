import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Home from './routes/home/index'
import Affiliate from './routes/affiliate/index'
import Advertiser from './routes/advertiser/index'
import NotFound from './routes/notFound/index'
import Sent from './routes/sent/index'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/affiliate' component={Affiliate} />
      <Route path='/advertiser' component={Advertiser} />
      <Route path='/sent' component={Sent} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
