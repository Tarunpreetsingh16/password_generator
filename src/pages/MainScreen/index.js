import React from 'react';
import CheckboxLabel from '../../components/CheckboxLabel';

const MainScreen = () => {
    return (
        <div>
            <CheckboxLabel
                labelText='Add capital letters to the password'
                checkboxId='capital_letter'
                checkboxName='capital_letter'
                checkboxValue='Capital Letter'
                />

        </div>
    )
}

export default MainScreen
