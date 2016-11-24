import { connect } from 'react-redux'
import ContactKeeperView from '../components/ContactKeeperView'
import { resetContact, remoteSubmitUserForm, contacts, contact }
  from '../../../redux/actions'
import { getContactsList, getIsFetching, getErrorMessage }
  from '../../../redux/reducers/contacts'
import { getIsContactSend, getIsContactSending, getContactErrorMessage }
  from '../../../redux/reducers/postContact'

const mapDispatchToProps = {
  resetContact,
  remoteSubmitUserForm,
  requestContacts: contacts.request,
  postContact: contact.post
}

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
  isContactSend: getIsContactSend(state),
  isContactSending: getIsContactSending(state),
  contactErrorMessage: getContactErrorMessage(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactKeeperView)
