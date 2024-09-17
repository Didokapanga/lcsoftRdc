import React, { useState } from 'react';
import './ContactForm.css'; // Assurez-vous d'inclure le fichier CSS

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour gérer l'envoi du formulaire, par exemple, une requête API
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
    };

    return (
        <div className="agence-form">
            <form onSubmit={handleSubmit}>
                <p>Décrivez votre projet ou posez votre question ici. Indiquez les aspects importants que nous devrions connaître pour vous fournir la meilleure assistance possible. Plus vous êtes précis, mieux nous pourrons vous assister.
                </p>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Entrez votre adresse email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="Entrez votre numéro de téléphone"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Laissez-nous votre message ici"
                    ></textarea>
                </div>
                <button type="submit" className='buttons'>Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;
