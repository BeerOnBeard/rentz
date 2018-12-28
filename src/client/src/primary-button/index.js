import React from 'react';
import './primaryButton.css';

const PrimaryButton = (props) => {
  const { className, disabled, text, onClick } = props;
  let properties = {
    className: 'primary-button'
  };

  if (className) {
    properties.className += ` ${className} `;
  }

  if (disabled) {
    properties.disabled = 'disabled';
    properties.className += ' primary-button--disabled ';
  }

  if (onClick) {
    properties.onClick = onClick;
  }

  return (
    <button {...properties}>{text}</button>
  );
}

export default PrimaryButton;
