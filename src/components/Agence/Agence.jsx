import React, { useEffect, useRef } from 'react'
import './Agence.css'
import { MdLocationOn } from 'react-icons/md'
import Maps from './Maps'
import ContactForm from '../ContactForm/ContactForm'

const Agence = () => {

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
        <div className='agence'>
            <div className="agence-content">
                <div className="agence-title">
                    <span className="agence-info primary-text">Notre agence</span>
                    <h2 className="agence-title secondary-text">Venez rendre visite à notre équipe sympathique dans nos locaux.</h2>
                </div>
                <div className="agence-item">
                    <div className="agence-left forme-animated" ref={(el) => serviceItemsRef.current[0] = el}>
                        <Maps />
                    </div>
                    <div className="agence-right forme-animated" ref={(el) => serviceItemsRef.current[1] = el}>
                        <div className="agence-location">
                            <span className='location-ville'>
                                <span className='icon-location'>
                                    <MdLocationOn />
                                </span>
                                <span className='label-location'>
                                    Kinshasa
                                </span>
                                <span className="adress-agence">
                                    312 rue kitona, Gombe
                                </span>
                            </span>
                            <div className="agences-form forme-animated" ref={(el) => serviceItemsRef.current[2] = el}>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agence
