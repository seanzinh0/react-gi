import React from 'react';

const BasicInfo = (props) => {
    return (
        <div>
            <h3>Name: {props.person.name}</h3>
            <p>Phone Number: {props.person.phoneNumber}</p>
            <p>DOB: {props.person.dob}</p>
        </div>
    )
}

export default BasicInfo;