import * as ActionTypes from '../actions/ActionTypes';
import * as UserActions from '../actions/userActions';

import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import API from '../api/baseApi';

function* fetchUsersData(action) {
  try {
    // const response = yield call(API.get, `/users?page=${action.payload}`);
    const response = yield call(API.get, `api/?results=20`);

    console.log(response, "response")
    yield put(UserActions.getUsersListSuccess(response.results));
  } catch (e) {
    yield put(UserActions.getUsersListError(e.message));
  }
}

function* incrementPage(action) {
  try {
    yield put({
      type: ActionTypes.INCREMENT_PAGE_SUCCESS,
      payload: 1,
    });
    yield put({
      type: ActionTypes.GET_USERS_LIST,
      payload: action.payload + 1,
    });
  } catch (e) {
    console.log('error ', e);
  }
}

export function* watchGetUsersList() {
  yield takeLatest(ActionTypes.GET_USERS_LIST, fetchUsersData);
}

export function* watchIncrementPage() {
  yield takeLatest(ActionTypes.INCREMENT_PAGE, incrementPage);
}

export default function* root() {
  yield
  [
    yield takeLatest(ActionTypes.GET_USERS_LIST, fetchUsersData),



    //yield takeLatest(ActionTypes.INCREMENT_PAGE, incrementPage)
  ]
    ;
}
