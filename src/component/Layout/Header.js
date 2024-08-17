import React, { useState } from 'react'
import ASSET_PATHS from '../../constant'

export default function Header() {

    const imgRoute = ASSET_PATHS.IMG_URL

    const [show, setShow] = useState(false)


    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <a href='#'> <img src={`${imgRoute}/logo.png`} alt='logo' /> </a>
                </div>

                <div className='nav-links'>
                    <i
                        className="bi bi-list"
                        onClick={() => setShow(!show)}
                    />
                    <ul className={`${show ? 'show' : ''}`}>
                        <li><a href='#'>Marketplace</a></li>
                        <li><a href='#'>Wallet</a></li>
                        <li><a href='#'>Statistics</a></li>
                        <li><a href='#'>Roadmap</a></li>
                    </ul>
                </div>

                <div className={`login `}>
                     <img src={`${imgRoute}/login2.png`} alt='login2' /> 
                    <a href='#'> <img src={`${imgRoute}/login1.png`} alt='login1' /> </a>
                </div>
            </div>
        </>
    )
}
