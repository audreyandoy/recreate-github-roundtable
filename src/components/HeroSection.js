import React from 'react';
import NewsletterForm from './NewsletterForm';

const HeroSection = () => {
    return (
        <div class="hero-section">
            <div class="hero-text">
                <h1>
                    Where the world builds software
                </h1>
                <p>
                    Millions of developers and companies build, ship, and maintain their software on Github --
                    the largest and most advanced development platform in the world.
                    <p><NewsletterForm></NewsletterForm></p>
                </p>
                
            </div>
            <img alt="earth" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"/>
        </div>
    )
}

export default HeroSection;