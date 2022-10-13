import React from 'react';
import './style.css'

const Checkbox = ({name, id, value}) => {
    return (
        <input type='checkbox' name={name} id={id} value={value} />
    )
}

export default Checkbox
