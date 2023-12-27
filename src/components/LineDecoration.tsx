'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function LineDecoration() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const maxScroll = useRef(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        maxScroll.current = document.documentElement.scrollHeight - window.innerHeight;
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        setScrollPercent(scrollY / maxScroll.current);
    }

    return (
        <div className='line-decoration'>
            <div className='thin-line'></div>
            <div className='thick-line' style={{transform: `translateY(${scrollPercent * 300}%)`}}></div>
        </div>
    )
}