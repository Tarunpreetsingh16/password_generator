import React from 'react';
import CheckboxLabel from '../../components/CheckboxLabel';
import './style.css';

const MainScreen = () => {
    return (
        <div className='mainScreen'>
            <div className='checkboxesContainer'>
                <CheckboxLabel
                    labelText='Add uppercase letters'
                    checkboxId='uppercase_letter'
                    checkboxName='uppercase_letter'
                    checkboxValue='Uppercase Letter'
                />
                <CheckboxLabel
                    labelText='Add lowercase letters'
                    checkboxId='lowercase_letter'
                    checkboxName='lowercase_letter'
                    checkboxValue='Lowercase Letter'
                />
                <CheckboxLabel
                    labelText='Add special charactes'
                    checkboxId='special_char'
                    checkboxName='special_char'
                    checkboxValue='Special char'
                />
            </div>
        </div>
    )
}

export default MainScreen
