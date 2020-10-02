import React from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './FormInputStyle';

const FormInput = ({ onChangeHandler, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={onChangeHandler} {...props} />
      {label ? <FormInputLabel className={props.value.length ? 'shrink' : ''}>{label}</FormInputLabel> : null}
    </GroupContainer>
  );
};

export default FormInput;
