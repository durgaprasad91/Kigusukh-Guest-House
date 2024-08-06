import React, { useEffect, useState } from 'react';
import '../CSS/Hero.css';

const Hero = () => {
    const [name, setName] = useState('Kingsukh');
    const [isTyping, setIsTyping] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const names = ['Guest House' , 'Kingsukh', 'Royal Retreat'];
        let index = 0;
        let typingTimer;

        const typeName = () => {
            if (index >= names.length) index = 0;
            setIsTyping(true);
            let nameIndex = 0;
            typingTimer = setInterval(() => {
                setName(names[index].substring(0, nameIndex + 1));
                nameIndex++;
                if (nameIndex > names[index].length) {
                    clearInterval(typingTimer);
                    setIsTyping(false);
                    setTimeout(() => {
                        setName('');
                        index++;
                        typeName();
                    }, 1000); 
                }
            }, 200); 
        };

        typeName();

        return () => clearInterval(typingTimer);
    }, []);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <section id='home' className={`hero ${loaded ? 'loaded' : ''}`}>
            <div className="hero-img" onLoad={handleImageLoad}></div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="hero-subtitle">Simple - Unique - Friendly</p>
                <h1 className="hero-title">
                    Make Yourself At Home<br />
                    In Our <span className={`hero-typing ${isTyping ? 'typing' : ''}`}>{name}</span>
                </h1>
                <a href="https://wa.me/919007062180" className="hero-button">Book Your Stay</a>
            </div>
        </section>
    );
};

export default Hero;
