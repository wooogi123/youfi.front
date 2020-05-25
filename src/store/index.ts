import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth from './reducers/auth';
import authSaga from './saga/auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export * from './actions/auth';
export * from './types/auth';

export function* rootSaga() {
  yield all([authSaga()]);
}
