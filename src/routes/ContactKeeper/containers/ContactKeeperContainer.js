import { connect } from 'react-redux'
import ContactKeeperView from '../components/ContactKeeperView'
import { fetchContacts, remoteSubmitUserForm } from '../../../redux/actions'
import { getContactsList, getIsFetching, getErrorMessage }
  from '../../../redux/reducers/contacts'

const mapDispatchToProps = {
  fetchContacts,
  remoteSubmitUserForm
}

const mapStateToProps = (state) => ({
  contactsList: getContactsList(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactKeeperView)
