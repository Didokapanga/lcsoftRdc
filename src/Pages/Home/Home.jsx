import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </div>
    )
}

export default Home
