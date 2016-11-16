import delay from '../libs/delay'
import fakeDatabase from '../libs/fakeDatabase'

function getContacts (req, res) {
  delay(500)
    .then(() => { res.json(fakeDatabase.contacts) })
}

export default { getContacts }
