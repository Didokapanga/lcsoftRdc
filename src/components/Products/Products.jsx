import React, { useEffect, useRef } from 'react'
import './Products.css'
import { FaArrowRight } from 'react-icons/fa6'
import { marque_1, marque_10, marque_11, marque_12, marque_13, marque_14, marque_15, marque_16, marque_2, marque_3, marque_4, marque_5, marque_6, marque_7, marque_8, marque_9 } from '../../assets/assets'

const Products = () => {

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
        <div className='products'>
            <div className="products-content">
                <div className="product-title">
                    <div className="products-info primary-text">Des marques qui ont changé le monde</div>
                    <h2 className="products-title secondary-text">Laissez-nous vous proposer des produits de qualité de la part de nos meilleurs fournisseurs.</h2>
                    <span className="products-desc">Nous collaborons avec de grand fournisseurs dans le pays pour béneficié des marques les plus fiables et réputées dans le domaine des équipements informatiques pour vous offrir des solutions qui répondent à vos besoins professionnels.</span>
                </div>
                <div className="product-item">
                    <div className="slider secondary forme-animated" ref={(el) => serviceItemsRef.current[0] = el}>
                        <ul>
                            <li><img src={marque_1} alt="" /></li>
                            <li><img src={marque_2} alt="" /></li>
                            <li><img src={marque_3} alt="" /></li>
                            <li><img src={marque_4} alt="" /></li>
                            <li><img src={marque_5} alt="" /></li>
                            <li><img src={marque_7} alt="" /></li>
                            <li><img src={marque_8} alt="" /></li>
                        </ul>
                    </div>
                    <div className="slider forme-animated" ref={(el) => serviceItemsRef.current[1] = el}>
                        <ul>
                            <li><img src={marque_9} alt="" /></li>
                            <li><img src={marque_10} alt="" /></li>
                            <li><img src={marque_11} alt="" /></li>
                            <li><img src={marque_12} alt="" /></li>
                            <li><img src={marque_13} alt="" /></li>
                            <li><img src={marque_15} alt="" /></li>
                            <li><img src={marque_16} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <a href="" className='forme-animated' ref={(el) => serviceItemsRef.current[2] = el}>Laissez-nous vous aider à trouver le matériel idéal pour vos besoins<FaArrowRight /></a>
            </div>
        </div>
    )
}

export default Products
