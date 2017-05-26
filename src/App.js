import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Home from './routes/home/index'
import Affiliate from './routes/affiliate/index'
import Advertiser from './routes/advertiser/index'
import NotFound from './routes/notFound/index'
import Sent from './routes/sent/index'
import ScrollToTop from './components/utils/ScrollToTop'

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Switch key={location.pathname}>
          <Route exact path='/' component={Home} />
          <Route path='/affiliate' component={Affiliate} />
          <Route path='/advertiser' component={Advertiser} />
          <Route path='/sent' component={Sent} />
          <Route component={NotFound} />
        </Switch>
    </ReactCSSTransitionGroup>
    </ScrollToTop>
  </BrowserRouter>
)

export default App
