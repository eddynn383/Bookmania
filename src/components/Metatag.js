import React from 'react'

export default function Metatag(opts) {
    return (
        <div className="card_metatag">
            <span className="card_metatag-value">{opts.value}</span>
            <span className="card_metatag-label">{opts.label}</span>
        </div>
    )
}
