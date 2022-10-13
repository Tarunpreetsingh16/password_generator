import React from 'react';

const Label = ({text, forId}) => {
    return (
        <label htmlFor={forId} >
            {text}
        </label>
    )
}

export default Label
