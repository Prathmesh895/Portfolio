// components/AOSWrapper.js
"use client"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AOSWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return <>{children}</>;
};

export default AOSWrapper;
