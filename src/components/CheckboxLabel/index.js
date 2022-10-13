import React from 'react';
import Label from '../Label';
import Checkbox from '../Checkbox';
import './style.css';

const CheckboxLabel = ({checkboxValue, checkboxId, labelText}) =>{
    return (
        <div className='checkboxLabel'>
            <Checkbox name={checkboxId} id={checkboxId} value={checkboxValue} />
            <Label text={labelText} forId={checkboxId} />
        </div>
    )
}

export default CheckboxLabel
