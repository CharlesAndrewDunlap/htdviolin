'use client';
import React, { useEffect, useState, useRef } from 'react';

interface LineDecorationProps {
    color: string;
    height: number;
}

export default function LineDecoration({ color, height }: LineDecorationProps): JSX.Element {
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
            <div className='thin-line' style={{borderRight: `1px solid ${color}`, height: `${height}vh`}}></div>
            <div className='thick-line' style={{borderLeft: `3px solid ${color}`, height: `${height / 2.3}vh`, transform: `translateY(${scrollPercent * 200}%)`}}></div>
        </div>
    )
}