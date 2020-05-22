import React from 'react';
import { 
  GroupContainer, 
  FormInputContainer, 
  FormInputLabel 
} from './form-input.styles'

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  )
};

export default FormInput;
//export to sign-in.component.jsx and sign-up.component.jsx 