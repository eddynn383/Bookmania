import React from 'react';
import './input.scss'

export default function Input(opts) {
    // console.log(opts)
    return (
        <div className="form-item">
            <label htmlFor={opts.id}>{opts.placeholder}</label>
            <input id={opts.id} className={"input input--" + opts.name} name={opts.name} type={opts.type} placeholder={opts.placeholder} length={opts.maxLength} value={opts.value} onChange={opts.onChange} />
        </div>
    )
}