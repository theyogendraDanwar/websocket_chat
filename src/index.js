import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import configureStore from './redux/create';
import RouteWithSubRoute from './utils/RouteWithSubRoute';
import NotFound from './components/NotFound/NotFound'
import { routes } from './routes'

import './argon-design-system-react.css';

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore(history)}>
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoute key={route.path} {...route} />
        ))
        }
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
