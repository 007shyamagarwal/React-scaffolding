import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware, apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
