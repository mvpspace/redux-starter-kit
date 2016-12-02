import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  IndexRoute,
  Route,
  browserHistory
} from 'react-router'
import { Provider } from 'react-redux'
import { store } from '/imports/environment/ui-state'
import { authenticate } from '/imports/api/accounts/client/index.js'
import {
  App,
  PageNotFound
} from '/imports/ui/_layouts'
import { Index, Login, Signup } from '/imports/ui/pages'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <div>
        <Router history={ history }>
          <Route path="/" component={ App }>
            <IndexRoute name="index" component={ Index } onEnter={ authenticate } />
            <Route name="login" path="/login" component={ Login } />
            <Route name="signup" path="/signup" component={ Signup } />
            <Route path="*" component={ PageNotFound } />
          </Route>
        </Router>
      </div>
    </Provider>,
    document.getElementById('react-root')
  )
})
