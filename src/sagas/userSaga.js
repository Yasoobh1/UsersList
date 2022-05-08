import * as ActionTypes from '../actions/ActionTypes';
import * as UserActions from '../actions/userActions';

import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import API from '../api/baseApi';

function* fetchUsersData(action) {
  try {
    const response = yield call(API.get, `api/?page=${action.payload}&results=100`);

    yield put(UserActions.getUsersListSuccess(response.results));
  } catch (e) {
    yield put(UserActions.getUsersListError(e.message));
  }
}


export default function* root() {
  yield
  [
    yield takeLatest(ActionTypes.GET_USERS_LIST, fetchUsersData),
  ]
    ;
}
