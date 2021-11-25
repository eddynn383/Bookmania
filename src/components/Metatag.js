import React from 'react'

export default function Metatag(opts) {
    return (
        <div className="card_metatag">
            <span className="card_metatag-value"><strong>{opts.value}</strong></span>
            <span className="card_metatag-label">{opts.label}</span>
        </div>
    )
}
