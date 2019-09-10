import { combineReducers } from 'redux'
import * as reducers from './index'
import { connectRouter } from 'connected-react-router'


const createRootReducer = (history) => combineReducers({
  ...reducers,
  router: connectRouter(history),
})

export default createRootReducer;