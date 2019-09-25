import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

export function* fetchToDoList() {
  const endpoint = 'https://raw.githubusercontent.com/swatigaur123/sample/master/sample.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}