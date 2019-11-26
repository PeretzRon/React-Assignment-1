import React from 'react';

import './UserOutput.css';

const userOutput = (props) =>{
  return (
    <div className={'userOut'}>
        <p className={'userName'}>{props.username}</p>
        <p onClick={props.click}>Click here to change the name</p>
    </div>
  );
};

export default userOutput;