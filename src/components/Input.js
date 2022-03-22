import { faAd } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './style/input.scss'

export default function Input(opts) {
    const attributes = {
        id: opts.id,
        className: "input" + (opts.className ? " input--" + opts.className : ''),
        name: opts.name, 
        type: opts.type, 
        label: opts.label,
        placeholder: opts.placeholder, 
        length: opts.maxLength, 
        value: opts.value, 
        istextarea: opts.isTextarea,
        rows: opts.rows,
        cols: opts.cols,
        onChange: opts.onChange,
        onClick: opts.onClick
    }
    let elem = "";
    if (opts.isTextarea) {
        elem = <textarea {...attributes}>{opts.children}</textarea>
    } else {
        elem = <input {...attributes} />
    }
    return (
        <>
            {
                opts.label && 
                <div className={"form-item" + (opts.className ? " form-item--" + opts.className : '')}>
                    {!opts.isTextarea && opts.children}
                    {elem}
                    <label htmlFor={opts.id}>{opts.label}</label>
                </div>
            }
            { !opts.label && elem }
        </>
    )
}