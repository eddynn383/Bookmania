import React from 'react';
import './inputStyle.css';

export default function Input(opts) {
    // console.log(opts)
    return (
        <div className={"formItem formItem--" + opts.dim}>
            <label htmlFor={opts.id}>{opts.placeholder}</label>
            <input id={opts.id} className={"input input--" + opts.name} name={opts.name} type={opts.type} placeholder={opts.placeholder} length={opts.maxLength} value={opts.value} onChange={opts.onChange} />
        </div>
    )
}
