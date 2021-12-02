import React from 'react';
import './style/panel.scss';

export default function Panel(opts) {
    return (
        <>
            {
                opts.name === "profile" &&
                <div className="panel panel--profile panel--absolute">
                    <a className="btn btn--default" href="/login">Log in</a>    
                    <span>or</span>
                    <a className="btn btn--default" href="/signup">Sign up</a>    
                </div>
            }
            {
                opts.name === "cart" &&
                <div className="panel panel--cart panel--absolute">
                    <p>Your cart is empty!</p>
                    <a className="btn btn--default" href="/cart">Cart</a> 
                </div>
            }
        </>
    )
}
