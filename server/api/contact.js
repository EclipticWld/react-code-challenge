import { v4 } from 'node-uuid'
import delay from '../libs/delay'
import fakeDatabase from '../libs/fakeDatabase'

const initialProfile = {
  firstName: '',
  lastName: '',
  bithday: '',
  phoneNumber: '',
  email: '',
  notes: ''
}
const createProfile = (profile = initialProfile) => ({
  id: v4(),
  firstName: profile.firstName,
  lastName: profile.lastName,
  bithday: profile.bithday,
  phoneNumber: profile.phoneNumber,
  email: profile.email,
  notes: profile.notes
})

function postContact (req, res) {
  const profile = createProfile(req.body)
  fakeDatabase.contacts.push(profile)
  delay(500)
    .then(() => { res.json(profile) })
}

export default { postContact }
