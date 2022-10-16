import React from 'react';
import './style.css';

const CheckboxLabel = ({checkboxValue, checkboxId, labelText}) =>{
    return (
        <label className='checkboxContainer'> {labelText}
            <input type='checkbox' name={checkboxId} id={checkboxId} value={checkboxValue} />
            <span className='checkmark'/>
        </label>
    )
}

export default CheckboxLabel
