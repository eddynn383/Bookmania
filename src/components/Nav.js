import React from 'react'
import './style/nav.scss'

export default function Nav() {
    return (
        <nav className="nav nav--desktop">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/library">Library</a></li>
                <li><a href="/authors">Authors</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
        </nav>
    )
}
