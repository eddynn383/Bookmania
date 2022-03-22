import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default function Profile(opts) {
    const [toggle, setToggle] = useState(false);
    const clickHandle = (e) => {
        e.preventDefault();
        opts.onClick();
    }
    console.log(opts);
    return (
        <div className="profile-section">
            <Button type="button" className="profile" onClick={clickHandle}><FontAwesomeIcon icon={faUser} /></Button>
            {
                opts.toggle && 
                <Panel name="profile" />
            }
        </div>
    )
}

Profile.propTypes = {
    onClick: PropTypes.func
}

