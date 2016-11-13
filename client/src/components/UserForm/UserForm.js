import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import './UserForm.css'

let UserForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='uk-form'>
      <div className='uk-form-row'>
        <div className='uk-form-label'>First Name:</div>
        <Field
          name='firstName'
          component='input'
          type='text'
          className='uk-width-1-1'
        />
      </div>
      <div className='uk-form-row'>
        <div className='uk-form-label'>Last Name:</div>
        <Field
          name='lastName'
          component='input'
          type='text'
          className='uk-width-1-1'
        />
      </div>
      <div className='uk-form-row'>
        <div className='uk-form-label'>Bithday:</div>
        <Field
          name='bithday'
          component='input'
          type='text'
          className='uk-width-1-1'
        />
      </div>
      <div className='uk-form-row'>
        <div className='uk-form-label'>Phone:</div>
        <Field
          name='phoneNumber'
          component='input'
          type='text'
          className='uk-width-1-1'
        />
      </div>
      <div className='uk-form-row'>
        <div className='uk-form-label'>Email:</div>
        <Field
          name='email'
          component='input'
          type='email'
          className='uk-width-1-1'
        />
      </div>
      <div className='uk-form-row'>
        <div className='uk-form-label'>Notes:</div>
        <Field
          name='notes'
          component='textarea'
          className='uk-width-1-1'
        />
      </div>
    </form>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

UserForm = reduxForm({
  form: 'userForm'
})(UserForm)

export default UserForm
