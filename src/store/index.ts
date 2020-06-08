import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import auth from './reducers/auth';
import authSaga from './saga/auth';
import dictionary from './reducers/dictionary';
import dictionarySaga from './saga/dictionary';
import deposit from './reducers/deposit';
import depositSaga from './saga/deposit';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  auth,
  dictionary,
  deposit,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    dictionarySaga(),
    depositSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(rootReducer, /* preloadedState, */ composeEnhancer(
  applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(rootSaga);

export default rootStore;
export * from './actions/auth';
export * from './types/auth';
export * from './actions/dictionary';
export * from './types/dictionary';
export * from './actions/deposit';
export * from './types/deposit';
