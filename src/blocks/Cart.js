import React, { useState } from 'react';
import Panel from './Panel';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
    const [toggle, setToggle] = useState(false);
    const clickHandle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }
    return (
        <div className="cart-section">
            <Button type="button" className="cart" onClick={clickHandle}><FontAwesomeIcon icon={faShoppingCart} /></Button>
            {
                toggle && 
                <Panel name="cart" />
            }
        </div>
    )
}
