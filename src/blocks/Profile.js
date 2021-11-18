import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import Input from './Input';


export default function Profile() {
    return (
        <div className="profile-section">
            <button className="btn btn--profile" type="submit"><FontAwesomeIcon icon={faUser} /></button>
            <div className="panel panel--profile"></div>
        </div>
    )
}
