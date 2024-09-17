import React, { useEffect, useRef } from 'react';
import './Services.css';
import { blob_1, blob_2, blob_3, blob_4 } from '../../assets/assets';
import { BiSupport } from 'react-icons/bi';
import { TbDatabaseSearch } from 'react-icons/tb';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { GrUserExpert } from 'react-icons/gr';
import Teams from '../Teams/Teams';
import Projects from '../Projects/Projects';
import Formations from '../Formations/Formations';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';
import Agence from '../Agence/Agence';

const Services = () => {
    // Références pour observer les animations
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
        <div className='services'>
            <div className="services-content">
                <span>Caractéristiques de services</span>
                <h2>Fournir des solutions impressionnantes avec l'aide de la technologie</h2>
                <div className="services-card">
                    <ul>
                        {/* Ajouter une référence pour chaque élément du service */}
                        <li className='forme-animated' ref={(el) => serviceItemsRef.current[0] = el}>
                            <h3>Études et conception des SI</h3>
                            <span className="service-icon">
                                <img src={blob_1} alt="" />
                                <span><TbDatabaseSearch /></span>
                            </span>
                            <div className="trait"></div>
                            <p className="services-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className='forme-animated' ref={(el) => serviceItemsRef.current[1] = el}>
                            <h3>Support informatique</h3>
                            <span className="service-icon">
                                <img src={blob_2} alt="" />
                                <span><BiSupport /></span>
                            </span>
                            <div className="trait"></div>
                            <p className="services-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className='forme-animated' ref={(el) => serviceItemsRef.current[2] = el}>
                            <h3>Développement logiciel</h3>
                            <span className="service-icon">
                                <img src={blob_3} alt="" />
                                <span><MdOutlineDevicesOther /></span>
                            </span>
                            <div className="trait"></div>
                            <p className="services-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                        <li className='forme-animated' ref={(el) => serviceItemsRef.current[3] = el}>
                            <h3>Consultance et expertise</h3>
                            <span className="service-icon">
                                <img src={blob_4} alt="" />
                                <span><GrUserExpert /></span>
                            </span>
                            <div className="trait"></div>
                            <p className="services-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <Teams />
            <Projects />
            <Formations />
            <Products />
            <Testimonials />
            <Agence />
        </div>
    );
}

export default Services;
