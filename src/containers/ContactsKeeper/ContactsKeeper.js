import React, { Component } from 'react';
import { Table } from '../../components'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { getContactsList, getIsFetching, getErrorMessage } from '../../redux/reducers/contacts';
import './ContactsKeeper.css';


class ContactsKeeper extends Component {

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  createContact() {
    const { addContact } = this.props;
    addContact({
      firstName: 'Greg',
      lastName: 'Norman',
      bithday: '1977.06.25',
      phoneNumber: '+132384235',
      email: 'Greg.Norman@gmail.com',
      notes: 'interesting'
    })
  }

  render() {
    const { isFetching, contactsList } = this.props;
    contactsList.forEach(contact => {delete contact.id});

    const thead = ['First Name', 'Last Name', 'Date of Birthday', 'Phone',
      'Email', 'Notes'];

    return (
      <div className="ContactsKeeper">
        <div className="ContactsKeeper-Nav">
          <button onClick={() => this.createContact()}>Add contact</button>

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
    errorMessage: getErrorMessage(state),
  };
};

ContactsKeeper = connect(
  mapStateToProps,
  actions
)(ContactsKeeper);

export default ContactsKeeper;
