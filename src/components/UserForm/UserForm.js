import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submitValidation from './submitValidation';
import './UserForm.css';

let UserForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit} className='uk-form'>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="bithday">Bithday</label>
      <Field name="bithday" component="input" type="text" />
    </div>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="phoneNumber">Phone Number</label>
      <Field name="phoneNumber" component="input" type="text" />
    </div>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <div className='uk-form-row uk-form-horizontal'>
      <label className='uk-form-label' htmlFor="notes">Notes</label>
      <Field name="notes" component="textarea" />
    </div>
  </form>
);

UserForm = reduxForm({
  form: 'userForm',
  onSubmit: submitValidation
})(UserForm);

export default UserForm;
