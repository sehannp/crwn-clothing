import React from 'react';
import './form-input.styles.scss';


///handleChange bubbled up because thats where the state is,
///and its better to have states of both variable together
///to connect to database
const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange}
      {...otherProps}/>
    {
      label ?
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
      : null
    }
  </div>
)

export default FormInput;
