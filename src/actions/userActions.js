import * as ActionTypes from './ActionTypes';

export const getUsersList = (payloadData) => ({
  type: ActionTypes.GET_USERS_LIST,
  payload: payloadData,
});

export const getUsersListSuccess = payloadData => ({
  type: ActionTypes.GET_USERS_LIST_SUCCESS,
  payload: payloadData,
});

export const getUsersListError = error => ({
  type: ActionTypes.GET_USERS_LIST_ERROR,
  payload: error,
});

export const incrementListPage = payloadData => ({
  type: ActionTypes.INCREMENT_PAGE,
  payload: payloadData,
});
