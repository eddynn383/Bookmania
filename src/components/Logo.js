import React from 'react'
import logoPath from '../assets/Logo.svg'
import './logo.scss'

export default function Logo() {
    return (
        <div className="logo">
            <img src={logoPath} alt="Bookmania"/>
        </div>
    )
}
