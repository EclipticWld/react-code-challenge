import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Table, UserForm, Button } from '../../components';
import * as actions from '../../redux/actions';
import { getContactsList, getIsFetching, getErrorMessage }
  from '../../redux/reducers/contacts';
import './ContactsKeeper.css';

const customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(51, 51, 51, 0.6)'
  },
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ContactsKeeper extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
  }
  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  submitContact(data) {
    // const { addContact } = this.props;
    console.log('data', data);
    // addContact({
    //   firstName: 'Greg',
    //   lastName: 'Norman',
    //   bithday: '1977.06.25',
    //   phoneNumber: '+132384235',
    //   email: 'Greg.Norman@gmail.com',
    //   notes: 'interesting'
    // })
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { isFetching, contactsList, remoteSubmitUserForm } = this.props;
    contactsList.forEach(contact => {delete contact.id});
    const thead = ['First Name', 'Last Name', 'Date of Birthday', 'Phone',
      'Email', 'Notes'];

    return (
      <div className='ContactsKeeper'>
        <div className='ContactsKeeper-Nav'>
          <button onClick={this.openModal}>Add contact</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}

            style={customStyles}
            contentLabel='Example Modal'
          >
            <h2 ref='subtitle'>Add new contact</h2>
            <UserForm />
            <Button onClick={remoteSubmitUserForm} buttonType='success'>Submit</Button>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal>
        </div>
        <Table thead={thead} tbody={contactsList} isFetching={isFetching} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contactsList: getContactsList(state),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state)
  };
};

ContactsKeeper = connect(
  mapStateToProps,
  actions
)(ContactsKeeper);

export default ContactsKeeper;
