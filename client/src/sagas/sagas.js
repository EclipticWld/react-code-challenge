// import { reset } from 'redux-form'
import { call, put } from 'redux-saga/effects'
import * as actions from '../redux/actions'
import * as api from '../api'

export function* fetchContacts () {
  yield put(actions.contacts.request())
  const response = yield call(api.fetchContacts)
  if (response) {
    yield put(actions.contacts.success(response))
  } else {
    // yield put(actions.contacts.invalidateContacts(response))
  }
}

// export function* postContact (date) {
//   yield put(actions.addContact())
//   try {
//     const contact = yield call(api.postContact(date))
//     yield put(actions.postedContact(contact))
//     yield put(reset('userForm'))
//   } catch (error) {
//     yield put(actions.invalidateContacts(error))
//   }
// }

export default function* root () {
  yield fetchContacts
  // yield fork(postContact)
}
