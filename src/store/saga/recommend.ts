import { takeEvery, call, put } from 'redux-saga/effects';
import { RecommendContent } from '../types';
import {
  recommendAction,
  RecommendAction,
  RECOMMEND_ASYNC_REQUEST,
} from '../actions';
import { fetchRecommend } from '../api';

function* fetchRecommendAsync(action: RecommendAction) {
  try {
    const resp: RecommendContent[] =
      yield call(fetchRecommend, action.payload as string);
    yield put(recommendAction.success(resp));
  } catch (err) {
    yield put(recommendAction.failure(err));
  }
}

export default function* recommendSaga() {
  yield takeEvery(RECOMMEND_ASYNC_REQUEST, fetchRecommendAsync);
}
