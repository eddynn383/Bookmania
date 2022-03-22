import React from 'react'
import logoPath from '../assets/BM-Logo.svg'
import './style/logo.scss'

export default function Logo() {
    return (
        <div className="logo">
            <img src={logoPath} alt="Bookmania"/>
        </div>
    )
}
