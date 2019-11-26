import React from 'react'

import './UserInput.css'

const userInput = (props) =>{
    return (
        <div>
            <input type='text' onChange={props.changed} value={props.currentName} placeholder={'Enter userName'}/>
        </div>
    );
};

export default userInput;