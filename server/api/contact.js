import { v4 } from 'node-uuid'
import fakeDatabase from '../libs/fakeDatabase'

const createProfile = ({
  firstName = null,
  lastName = null,
  bithday = null,
  phoneNumber = null,
  email = null,
  notes = null
}) => ({
  id: v4(),
  firstName: firstName,
  lastName: lastName,
  bithday: bithday,
  phoneNumber: phoneNumber,
  email: email,
  notes: notes
})

function postContact (req, res) {
  const profile = createProfile(req.body)
  fakeDatabase.contacts.push(profile)
  res.json(profile)
}

export default { postContact }
