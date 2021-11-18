import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Input from './Input';


export default function Cart() {
    return (
        <div className="cart-section">
            <button className="btn btn--cart" type="submit"><FontAwesomeIcon icon={faShoppingCart} /></button>
            <div className="panel panel--cart"></div>
        </div>
    )
}
