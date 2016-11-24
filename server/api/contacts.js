import fakeDatabase from '../libs/fakeDatabase'

function getContacts (req, res) {
  res.json(fakeDatabase.contacts)
}

export default { getContacts }
