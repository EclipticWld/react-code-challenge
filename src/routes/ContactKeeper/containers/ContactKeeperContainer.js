import { connect } from 'react-redux'
import ContactKeeperView from '../components/ContactKeeperView'
import { fetchContacts, submitContact, resetContact, remoteSubmitUserForm }
  from '../../../redux/actions'
import { getContactsList, getIsFetching, getErrorMessage }
  from '../../../redux/reducers/contacts'
import { getIsContactSend, getIsContactSending, getContactErrorMessage }
  from '../../../redux/reducers/addContact'

const mapDispatchToProps = {
  fetchContacts,
  submitContact,
  resetContact,
  remoteSubmitUserForm
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
