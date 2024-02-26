import React from 'react'
import '../Styles/main.css'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href="#home">Home</a>
            <a href="#home">Mywork</a>
            <a href="#home">Blog</a>
            <a href="#home">Aboutme</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes className='close' />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar
