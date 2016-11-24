import { reset } from 'redux-form'
import { takeLatest, delay } from 'redux-saga'
import { call, put, take, fork } from 'redux-saga/effects'
import * as actions from '../redux/actions'
import * as api from '../api'

export function* fetchContacts () {
  yield call(delay, 1000)
  try {
    const response = yield call(api.fetchContacts)
    yield put(actions.contacts.success(response))
  } catch (error) {
    yield put(actions.contacts.failure(error))
  }
}

export function* postContact () {
  while (true) {
    const request = yield take('POST_CONTACT')
    yield call(delay, 500)
    try {
      const apiResponse = yield call(api.postContact, request.data)
      yield put(actions.contact.success(apiResponse))
      yield put(reset('userForm'))
    } catch (error) {
      yield put(actions.contact.failure(error))
    }
  }
}

export default function* root () {
  yield takeLatest('FETCH_CONTACTS_REQUEST', fetchContacts)
  yield fork(postContact)
}
