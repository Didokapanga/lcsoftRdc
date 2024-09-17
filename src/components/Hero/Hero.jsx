import './Hero.css';
import { FaArrowDown } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react';
import { play, project_1 } from '../../assets/assets';

const Hero = () => {

    const serviceItemsRef = useRef([]);

    useEffect(() => {
        // Fonction d'observation
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

    // Fonction pour défiler vers le bas
    const scrollDown = () => {
        window.scrollBy({
            top: 750, // Valeur en pixels pour défiler vers le bas
            left: 0,
            behavior: 'smooth' // Défilement en douceur
        });
    };

    return (
        <div className='hero'>
            <div className="hero-content">
                <div className="hero-left">
                    <img src={project_1} alt="" className='image-hero' />
                    <img src={play} alt="" className='video-play' />
                </div>
                <div className="hero-right">
                    <h1 className='forme-animated' ref={(el) => serviceItemsRef.current[0] = el}>Votre agence spécialisée dans la <span className='text-color'>création de logiciels</span> sur mesure et de <span className="text-color">systèmes d'information</span> informatisé</h1>
                    <span className='hero-devise forme-animated' ref={(el) => serviceItemsRef.current[1] = el}>Consommons le génie congolais</span>
                    <div className='trait-hero forme-animated' ref={(el) => serviceItemsRef.current[2] = el}></div>
                    <div className="hero-btn" onClick={scrollDown}>
                        <span><FaArrowDown /></span>
                    </div>
                    <p className='forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                        Depuis un certains temps, nous développons des solutions numériques et accompagnons nos clients dans la création d’applications digitales au service de la transition numérique.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
