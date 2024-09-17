import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { logo } from '../../assets/assets';
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        // Vérifier si la position de défilement dépasse 37rem (592px)
        if (currentScrollY > 592) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${showNavbar ? 'navbar--visible' : 'navbar--hidden'} ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo du site" className="logo-img" />
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li><a href="">Nos services</a></li>
                        <li><a href="">Nos réalisations</a></li>
                        <li><a href="">Formations</a></li>
                        <li><a href="">Produits</a></li>
                        <li><a href="">Prendre contact</a></li>
                    </ul>
                    <span className="berger-menu"><RiMenu4Line /></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
