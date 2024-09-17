import React, { useEffect, useRef } from 'react'
import './Footer.css'

const Footer = () => {

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

    return (
        <div className='footer'>
            <div className="footer-content">
                <ul>
                    <li className='forme-animated' ref={(el) => serviceItemsRef.current[0] = el}>
                        <h4>Nos services</h4>
                        <ul className='footer-item'>
                            <li><a href="">Études et conception des SI</a></li>
                            <li><a href="">Support informatique</a></li>
                            <li><a href="">Développement logiciel</a></li>
                            <li><a href="">Consultance et expertise</a></li>
                        </ul>
                    </li>
                    <li className='forme-animated' ref={(el) => serviceItemsRef.current[1] = el}>
                        <h4>Nos collaborateurs</h4>
                        <ul className='footer-item'>
                            <li><a href="">Collaborateur 1</a></li>
                            <li><a href="">Collaborateur 2</a></li>
                            <li><a href="">Collaborateur 3</a></li>
                            <li><a href="">Collaborateur 4</a></li>
                        </ul>
                    </li>
                    <li className='forme-animated' ref={(el) => serviceItemsRef.current[2] = el}>
                        <h4>Nos formations</h4>
                        <ul className='footer-item'>
                            <li><a href="">Programmation desktop</a></li>
                            <li><a href="">Programmation web</a></li>
                            <li><a href="">Programmation mobile</a></li>
                            <li><a href="">Conception de système d'infirmation informatisé</a></li>
                            <li><a href="">Base de données</a></li>
                            <li><a href="">Analyse de données</a></li>
                            <li><a href="">Language sql</a></li>
                            <li><a href="">Bureautique</a></li>
                        </ul>
                    </li>
                    <li className='forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                        <h4>A propos de nous</h4>
                        <ul className='footer-item'>
                            <li><a href="">Pourquoi nous choisir ?</a></li>
                            <li><a href="">Mentions légales</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <span className='footer-cta forme-animated' ref={(el) => serviceItemsRef.current[4] = el}>Ce site web reflète notre expertise. Imaginez ce que nous pourrions accomplir ensemble pour répondre à vos besoins spécifiques !</span>
        </div>
    )
}

export default Footer
