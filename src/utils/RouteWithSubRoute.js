import React from 'react'
import { Route } from 'react-router-dom'

const RouteWithSubRoute = ({path, exact, ...route}, key) => (
  <Route path={path} exact={exact} key={key} render={(props) => (
    <route.component {...props} {...route} />
  )} />
)
export default RouteWithSubRoute;