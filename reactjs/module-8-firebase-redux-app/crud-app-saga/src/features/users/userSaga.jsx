import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,
  createUserRequest, createUserSuccess, createUserFailure,
  updateUserRequest, updateUserSuccess, updateUserFailure,
  deleteUserRequest, deleteUserSuccess, deleteUserFailure,
} from './userSlice';

import api from './userAPI';

function * fetchUsersSaga() {
  try {
    const users = yield call(api.fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}
function* createUserSaga(action) {
  try {
    const newUser = yield call(api.createUser, action.payload);
    yield put(createUserSuccess(newUser));
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}
function* updateUserSaga(action) {
  try {
    const updated = yield call(api.updateUser, action.payload);
    yield put(updateUserSuccess(updated));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}
function* deleteUserSaga(action) {
  try {
    yield call(api.deleteUser, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}
export default function* userSaga() {
  yield all([
    takeLatest(fetchUsersRequest.type, fetchUsersSaga),
    takeLatest(createUserRequest.type, createUserSaga),
    takeLatest(updateUserRequest.type, updateUserSaga),
    takeLatest(deleteUserRequest.type, deleteUserSaga),
  ]);
}