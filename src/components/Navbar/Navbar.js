import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='Navbar'>
            <span className='nav-logo'>FlightData</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href='https://airlabs.co/' target='_blank' rel='noopener noreferrer'>AirLabs</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar