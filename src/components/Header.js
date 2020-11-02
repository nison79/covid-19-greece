import React from 'react'
import './Header.css'
import Img from '../images/flag.png'

function Header() {
    return (
        <div className = "header">

            <div className="header__container">
                <div className="header__logo">
                    <img src={Img} alt=""/>
                </div>
                <div className="header__headline">
                    <h2>Covid-19 Cases In Greece</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Header
