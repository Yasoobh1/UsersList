import { all, fork } from 'redux-saga/effects';
import {
  watchGetUsersList,
  watchIncrementPage,
} from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetUsersList),
    fork(watchIncrementPage)
  ]);
}
