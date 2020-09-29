import React from 'react';

const FormInput = ({ onChangeHandler, label, ...otherProps }) => {
  return (
    <div className='form__group'>
      <input onChange={onChangeHandler} {...otherProps} className='form__input' />
      {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form__inputLabel`}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
