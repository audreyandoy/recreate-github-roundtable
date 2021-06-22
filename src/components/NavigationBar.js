import React from 'react';
import SearchBar from './SearchBar';
import LoginControls from './LoginControls';

const NavigationBar = () => {
    return (
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>Why Github?</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Explore</li>
                    <li>Marketplace</li>
                    <li>Pricing</li>
                    <li><SearchBar></SearchBar></li>
                    <li><LoginControls></LoginControls></li>
                </ul>
            </nav>

    );
}

export default NavigationBar;