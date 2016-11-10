import React from 'react';
import classNames from 'classnames';
import './Button.css';

const extraColor = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return 'uk-button-primary';
    case 'success':
      return 'uk-button-success';
    case 'danger':
      return 'uk-button-danger'
    default:
      return '';
  }
};

const Button = ({children, buttonType, ...custom}) => (
  <button
    className={classNames('uk-button', extraColor(buttonType))}
    type='button'
    {...custom}
  >
    {children}
  </button>
)

export default Button;
