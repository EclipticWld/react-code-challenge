import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import submitValidation from './submitValidation'
import './UserForm.css'

let UserForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className='uk-form'>
    <div className='uk-form-row'>
      <Field
        name='firstName'
        component='input'
        type='text'
        placeholder='First Name'
      />
    </div>
    <div className='uk-form-row'>
      <Field
        name='lastName'
        component='input'
        type='text'
        placeholder='Last Name'
      />
    </div>
    <div className='uk-form-row'>
      <Field
        name='bithday'
        component='input'
        type='text'
        placeholder='Bithday'
      />
    </div>
    <div className='uk-form-row'>
      <Field
        name='phoneNumber'
        component='input'
        type='text'
        placeholder='Phone number'
      />
    </div>
    <div className='uk-form-row'>
      <Field
        name='email'
        component='input'
        type='email'
        placeholder='Email'
      />
    </div>
    <div className='uk-form-row'>
      <Field
        name='notes'
        component='textarea'
        placeholder='Notes'
      />
    </div>
  </form>
)

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

UserForm = reduxForm({
  form: 'userForm',
  onSubmit: submitValidation
})(UserForm)

export default UserForm
