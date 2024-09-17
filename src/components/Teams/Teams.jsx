import React, { useEffect, useRef } from 'react';
import './Teams.css';
import { FaPlus } from 'react-icons/fa';

const Teams = () => {
    // Références pour observer les animations
    const teamItemsRef = useRef([]);
    const textAnimatedRef = useRef(null);
    const animateTopRef = useRef([]);
    const blobAnimatedRef = useRef([]);

    useEffect(() => {
        // Fonction d'observation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('teams-is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observer chaque élément
        if (textAnimatedRef.current) {
            observer.observe(textAnimatedRef.current);
        }

        animateTopRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        blobAnimatedRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        teamItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        // Nettoyage
        return () => {
            if (textAnimatedRef.current) {
                observer.unobserve(textAnimatedRef.current);
            }
            animateTopRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
            blobAnimatedRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
            teamItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className='teams'>
            <div className="teams-content">
                <div className="teams-left">
                    <span className="teams-primary-text">Pourquoi nous choisir ?</span>
                    <h2 className="secondary-text">
                        Transformer vos défis numériques<br />en opportunités de croissance!
                    </h2>
                    <p className='teams-forme-animated' ref={(el) => teamItemsRef.current[0] = el}>
                        Chez LC Soft, nous nous engageons à vous accompagner dans la numérisation de vos processus pour optimiser vos performances et vous aider à atteindre vos objectifs stratégiques. Grâce à notre expertise en développement logiciel, conception de systèmes d'information, support informatique, et services de consultance, nous fournissons des solutions personnalisées et innovantes, adaptées à vos besoins spécifiques.

                        De plus, grâce à notre réseau de fournisseurs de confiance, nous avons la possibilité de vous fournir des équipements sûrs et fiables, garantissant ainsi une mise en œuvre réussie de vos projets technologiques.
                    </p>
                    <a href="#" className='teams-blob-animated' ref={(el) => blobAnimatedRef.current[0] = el}>Voir Plus</a>
                </div>
                <div className="teams-right">
                    <ul className='teams-animate-top'>
                        <li ref={(el) => teamItemsRef.current[1] = el}>
                            <div className="teams-team-title teams-blob-animated" ref={(el) => blobAnimatedRef.current[1] = el}>
                                <span className='team-body'>
                                    <span className='teams-team-number'>12</span>
                                    <span className='teams-icon-add'><FaPlus /></span>
                                    <span className='teams-name-item'>Employés</span>
                                </span>
                            </div>
                            <div className="teams-team-item">
                                <span>
                                    Nos employés sont des experts dans leurs domaines respectifs, qu'il s'agisse de développement logiciel, de gestion de systèmes d'information ou de support technique. Ils sont au cœur de notre succès.
                                </span>
                            </div>
                        </li>
                        <li ref={(el) => teamItemsRef.current[2] = el}>
                            <div className="teams-team-title teams-blob-animated" ref={(el) => blobAnimatedRef.current[2] = el}>
                                <span>
                                    <span className='teams-team-number'>20</span>
                                    <span className='teams-icon-add'><FaPlus /></span>
                                    <span className='teams-name-item'>Produits</span>
                                </span>
                            </div>
                            <div className="teams-team-item"><span>
                                Nos projets sont le reflet de notre compétence technique, de notre capacité à innover et de notre engagement à fournir des résultats exceptionnels.
                            </span>
                            </div>
                        </li>
                        <li ref={(el) => teamItemsRef.current[3] = el}>
                            <div className="teams-team-title teams-blob-animated" ref={(el) => blobAnimatedRef.current[3] = el}>
                                <span>
                                    <span className='teams-team-number'>35</span>
                                    <span className='teams-icon-add'><FaPlus /></span>
                                    <span className='teams-name-item'>Clients</span>
                                </span>
                            </div>
                            <div className="teams-team-item"><span>
                                Nous sommes fiers de collaborer avec une clientèle diversifiée, allant des petites entreprises aux grandes multinationales, en passant par les organisations gouvernementales et les ONG.
                            </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Teams;
