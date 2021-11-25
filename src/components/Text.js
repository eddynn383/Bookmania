import React from 'react'

export default function Text(opts) {
    return (
        <span className={opts.className}>{opts.children}</span>
    )
}
