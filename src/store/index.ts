import {
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {
  auth,
  dictionary,
  deposit,
  saving,
} from './reducers';
import {
  authSaga,
  dictionarySaga,
  depositSaga,
  savingSaga,
} from './saga';

const rootReducer = combineReducers({
  auth,
  dictionary,
  deposit,
  saving,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    dictionarySaga(),
    depositSaga(),
    savingSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default rootStore;
export * from './actions';
export * from './types';
