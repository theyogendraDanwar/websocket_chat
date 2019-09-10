import Login from './containers/LoginContainer'
import Home from './containers/HomeContainer'

export const routes = [
  { path: '/',
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    exact: true,
    component: Home,
  }
]