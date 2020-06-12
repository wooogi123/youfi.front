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
} from './reducers';
import {
  authSaga,
  dictionarySaga,
  depositSaga,
  savingSaga,
  loanSaga,
} from './saga';

const rootReducer = combineReducers({
  auth,
  dictionary,
  deposit,
  saving,
  loan,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    dictionarySaga(),
    depositSaga(),
    savingSaga(),
    loanSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default rootStore;
export * from './actions';
export * from './types';
