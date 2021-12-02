import React, { useState } from 'react';
import Panel from './Panel';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Profile() {
    const [toggle, setToggle] = useState(false);
    const clickHandle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }
    return (
        <div className="profile-section">
            <Button type="button" className="profile" onClick={clickHandle}><FontAwesomeIcon icon={faUser} /></Button>
            {
                toggle && 
                <Panel name="profile" />
            }
        </div>
    )
}
