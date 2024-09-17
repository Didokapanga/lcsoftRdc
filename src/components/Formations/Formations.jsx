import React, { useEffect, useRef, useState } from 'react';
import './Formations.css';
import { blob_5, coding, formation, logo_C, mysql, stars } from '../../assets/assets';
import { FaArrowRight } from 'react-icons/fa6';

const Formations = () => {
    const serviceItemsRef = useRef([]);
    const [scrollIndex, setScrollIndex] = useState(0);
    const scrollInterval = useRef(null);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Fonction d'observation pour les animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer chaque élément du service
        serviceItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Nettoyage
        return () => {
            serviceItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    useEffect(() => {
        // Fonction pour faire défiler automatiquement
        const startAutoScroll = () => {
            scrollInterval.current = setInterval(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft += 300; // Ajuste la valeur selon tes besoins
                    if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
                        scrollContainerRef.current.scrollLeft = 0;
                    }
                }
            }, 3000); // Ajuste l'intervalle de temps selon tes besoins
        };

        startAutoScroll();

        // Nettoyage
        return () => {
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
            }
        };
    }, []);

    const scrollTo = (index) => {
        if (scrollContainerRef.current) {
            const scrollAmount = index * 300; // Ajuste la valeur selon tes besoins
            scrollContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className='formations'>
            <div className="formations-content">
                <div className="formations-title">
                    <span className="formations-info primary-text">Nos programmes de formation complets</span>
                    <h2 className="formations-title secondary-text">Découvrez nos programmes de formation conçus pour vous préparer aux métiers de demain.</h2>
                    <a href="#" className='formations-btn forme-animated blob-animated' ref={(el) => serviceItemsRef.current[0] = el}>Voir Plus</a>
                </div>
                <div className="formations-item" ref={scrollContainerRef}>
                    <ul className='forme-animated' ref={(el) => serviceItemsRef.current[1] = el}>
                        {formation.map((formations, index) => (
                            <li key={index}>
                                <span className="formation-icon">
                                    <img src={formations.first_logo} alt="" className='blob-item' />
                                    <img src={formations.two_logo} alt="" className='icon-item' />
                                </span>
                                <h3 className="formation-title secondary-text">{formations.title}</h3>
                                <span className="formation-desc">{formations.desc}</span>
                                <a className="formation-btn">Découvrir<FaArrowRight /></a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="formations-nav">
                    <button onClick={() => scrollTo(0)} className='nav-btn'>1</button>
                    <button onClick={() => scrollTo(1)} className='nav-btn'>2</button>
                    <button onClick={() => scrollTo(2)} className='nav-btn'>3</button>
                    <button onClick={() => scrollTo(3)} className='nav-btn'>4</button>
                    <button onClick={() => scrollTo(4)} className='nav-btn'>5</button>
                    <button onClick={() => scrollTo(5)} className='nav-btn'>6</button>
                    <button onClick={() => scrollTo(6)} className='nav-btn'>7</button>
                </div>
            </div>
        </div>
    );
};

export default Formations;
