import React from 'react';
import './style/input.scss'

export default function Input(opts) {
    // console.log(opts)
    return (
        !opts.isTextarea ?
        opts.placeholder ?
        <div className="form-item">
            {opts.label && <label htmlFor={opts.id}>{opts.label}</label>}
            <input id={opts.id} className={opts.name ? "input input--" + opts.name : ""} name={opts.name} type={opts.type} placeholder={opts.placeholder} length={opts.maxLength} value={opts.value} onChange={opts.onChange} />
        </div>
        :
        <input id={opts.id} className={opts.className + " " + (opts.name ? "input input--" + opts.name : "")} name={opts.name} type={opts.type} placeholder={opts.placeholder} length={opts.maxLength} value={opts.value} onChange={opts.onChange} />
        :
        <div className="form-item">
            {opts.label && <label htmlFor={opts.id}>{opts.label}</label>}
            <textarea id={opts.id} className={opts.name ? "input input--" + opts.name : ""} name={opts.name} rows={opts.rows} cols={opts.cols} onChange={opts.onChange}></textarea>
        </div>
    )
}