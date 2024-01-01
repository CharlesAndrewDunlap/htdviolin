'use client';

import React, { useState, useEffect } from 'react';

export default function SoundSampler(): JSX.Element {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const newOpacity: number = Math.max(1 - window.scrollY / 500, 0);
            setOpacity(newOpacity);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button className='sound-sampler' style={{ opacity }}><span>Hear a Sound</span></button>
    )
}