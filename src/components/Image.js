import React from 'react';
import './style/image.scss'

export default function Image(opts) {
    const attributes = {
        id: opts.id,
        className: opts.className,
        src: opts.src,
        alt: opts.alt
    }
    return (
        <img {...attributes} />
    )
}