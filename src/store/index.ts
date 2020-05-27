import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth from './reducers/auth';
import authSaga from './saga/auth';
import dictionary from './reducers/dictionary';
import dictionarySaga from './saga/dictionary';

const rootReducer = combineReducers({
  auth,
  dictionary,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export * from './actions/auth';
export * from './types/auth';
export * from './actions/dictionary';
export * from './types/dictionary';

export function* rootSaga() {
  yield all([
    authSaga(),
    dictionarySaga(),
  ]);
}
