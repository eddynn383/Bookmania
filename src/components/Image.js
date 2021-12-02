import React from 'react';
import './style/image.scss'

export default function Image(opts) {
    return (
        <img id={opts.id} className={opts.className} src={opts.src} alt={opts.alt} />
    )
}