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
  loan,
  recommend,
} from './reducers';
import {
  authSaga,
  dictionarySaga,
  depositSaga,
  savingSaga,
  loanSaga,
  recommendSaga,
} from './saga';

const rootReducer = combineReducers({
  auth,
  dictionary,
  deposit,
  saving,
  loan,
  recommend,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    dictionarySaga(),
    depositSaga(),
    savingSaga(),
    loanSaga(),
    recommendSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default rootStore;
export * from './actions';
export * from './types';
