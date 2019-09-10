import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import reduxWebsocket from 'react-redux-websocket';



import { createBrowserHistory } from 'history'

const websocket = new WebSocket("ws://echo.websocket.org/");

export const history = createBrowserHistory()
const configureStore = (data) => {
  const middleware = [routerMiddleware(history), reduxWebsocket(websocket),thunk];
  const finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);
  // const finalCreateStore = applyMiddleware(...middleware)(createStore);
  const store = finalCreateStore(createRootReducer(history), data);
  return store;
};

export default configureStore;
