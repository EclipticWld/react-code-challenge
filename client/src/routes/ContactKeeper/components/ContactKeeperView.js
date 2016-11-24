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

  componentWillMount () {
    const { requestContacts } = this.props
    requestContacts()
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  submitContact = (values) => {
    this.props.postContact(values)
  }

  render () {
    const { isFetching, contactsList, remoteSubmitUserForm,
     isContactSend, isContactSending } = this.props
    const thead = ['First Name', 'Last Name', 'Date of Birthday', 'Phone',
      'Email', 'Notes']
    const colMapPattern = {
      firstName: 1,
      lastName: 2,
      bithday: 3,
      phoneNumber: 4,
      email: 5,
      notes: 6
    }
    const tBody = contactsList && contactsList
      .map(contact => {
        delete contact.id
        return Object.keys(contact)
          .sort((x, y) => colMapPattern[x] - colMapPattern[y])
          .map((key) => contact[key])
      })

    return (
      <div className='ContactsKeeper'>
        <div className='ContactsKeeper-Nav'>
          <Button onClick={this.openModal}>
            <i className='fa fa fa-external-link fa-lg' aria-hidden='true' />
          </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyles}
            contentLabel='Add new contact'
          >
            <h2>Add new contact</h2>
            <UserForm onSubmit={this.submitContact} />
            <div className='uk-margin-top'>
              <Button
                onClick={remoteSubmitUserForm}
                disabled={isContactSending}
                buttonType='success'>
                {
                  isContactSend ? <i className='fa fa-check' aria-hidden='true' />
                  : isContactSending ? <i className='fa fa-spinner fa-spin' aria-hidden='true' />
                  : <i className='fa fa-paper-plane-o' aria-hidden='true' />
                }
                &nbsp;Submit
              </Button>
              <Button
                onClick={this.closeModal}
                className='uk-margin-small-left'>
                Close
              </Button>
            </div>
          </Modal>
        </div>
        <Table thead={thead} tbody={tBody} isFetching={isFetching} />
      </div>
    )
  }
}

ContactKeeperView.propTypes = {
  requestContacts: PropTypes.func.isRequired,
  postContact: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  contactsList: PropTypes.array.isRequired,
  remoteSubmitUserForm: PropTypes.func.isRequired,
  isContactSend: PropTypes.bool.isRequired,
  isContactSending: PropTypes.bool.isRequired
}
export default ContactKeeperView
