import React from 'react'

export default function Button(o) {
    return (
        <button className={"btn btn--" + o.className} type={o.type} disabled={o.disabled} onClick={o.onClick}>{o.children}</button>
    )
}