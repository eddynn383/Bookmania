import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Cart(opts) {
    const clickHandle = (e) => {
        e.preventDefault();
        opts.onClick();
    }
    return (
        <div className="cart-section">
            <Button type="button" className="cart" onClick={clickHandle}><FontAwesomeIcon icon={faShoppingCart} /></Button>
            {
                opts.toggle && 
                <Panel name="cart" />
            }
        </div>
    )
}

Cart.propTypes = {
    onClick: PropTypes.func
}
