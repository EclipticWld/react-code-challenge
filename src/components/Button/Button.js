import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './Button.css'

const extraColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return 'uk-button-primary'
    case 'success':
      return 'uk-button-success'
    case 'danger':
      return 'uk-button-danger'
    default:
      return ''
  }
}

const Button = ({ children, buttonType, className, ...custom }) => (
  <button
    className={classNames('uk-button', extraColor(buttonType), className)}
    type='button'
    {...custom}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  className: PropTypes.string
}

export default Button
