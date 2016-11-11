import React, { PropTypes, Component } from 'react'
import Modal from 'react-modal'
import { Table, UserForm, Button } from '../../../components'
import './ContactKeeperView.css'

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(51, 51, 51, 0.6)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '32px 48px',
    transform: 'translate(-50%, -50%)'
  }
}

class ContactKeeperView extends Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }
  }

  componentDidMount () {
    const { fetchContacts } = this.props
    fetchContacts()
  }

  // submitContact (data) {
    // const { addContact } = this.props
    // addContact({
    //   firstName: 'Greg',
    //   lastName: 'Norman',
    //   bithday: '1977.06.25',
    //   phoneNumber: '+132384235',
    //   email: 'Greg.Norman@gmail.com',
    //   notes: 'interesting'
    // })
  // }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal = () => {
    this.refs.subtitle.style.color = '#f00'
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render () {
    const { isFetching, contactsList, remoteSubmitUserForm } = this.props
    contactsList.forEach(contact => { delete contact.id })
    const thead = ['First Name', 'Last Name', 'Date of Birthday', 'Phone',
      'Email', 'Notes']

    return (
      <div className='ContactsKeeper'>
        <div className='ContactsKeeper-Nav'>
          <Button onClick={this.openModal}>
            <i className='fa fa fa-external-link fa-lg' aria-hidden='true' />
          </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={modalStyles}
            contentLabel='Add new contact'
          >
            <h2 ref='subtitle'>Add new contact</h2>
            <UserForm />
            <div className='uk-margin-top'>
              <Button onClick={remoteSubmitUserForm} buttonType='success'>
                Submit
              </Button>
              <Button
                onClick={this.closeModal}
                className='uk-margin-small-left'>
                Close
              </Button>
            </div>
          </Modal>
        </div>
        <Table thead={thead} tbody={contactsList} isFetching={isFetching} />
      </div>
    )
  }
}

ContactKeeperView.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  contactsList: PropTypes.array.isRequired,
  remoteSubmitUserForm: PropTypes.func.isRequired
}
export default ContactKeeperView
