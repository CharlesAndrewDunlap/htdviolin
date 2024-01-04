'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function SoundSampler(): JSX.Element {
    const [opacity, setOpacity] = useState(1);
    const [sampleInt, setSampleInt] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    /*

    To add a new audio sample:

    1. Add the file to /public and title it exactly as you want it to appear when it plays.
    2. Add the title to the samples array in the exact same spelling as the file name except with spaces where you want them.

    */
    const samples: string[] = ['I Bind My Heart This Tide', 'LIVE: The Mennonite Mass - V. Agnus Dei', 'Through Our Fragmentary Prayers'];

    const togglePlayback = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isPlaying) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setIsPlaying(false);
            setSampleInt(sampleInt === samples.length - 1 ? 0 : sampleInt + 1);
        } else {
            let currentAudio: string = samples[sampleInt];
            currentAudio = currentAudio.split(' ').join('');
            console.log('current audio:', currentAudio);
            const audio = new Audio(`/${currentAudio}.wav`);
            audioRef.current = audio;
            audio.play();
            setIsPlaying(true);
            
            audio.addEventListener('ended', handleAudioEnd);
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
        setSampleInt(sampleInt === samples.length - 1 ? 0 : sampleInt + 1);
    }

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener('ended', handleAudioEnd);
            }
        }
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const newOpacity: number = Math.max(1 - window.scrollY / 500, 0);
            setOpacity(newOpacity);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button className='sound-sampler' style={{ opacity, padding: '5px', fontSize: '1em' }} onClick={togglePlayback}><span style={{padding: '10px'}}>{isPlaying ? `Playing "${samples[sampleInt]}"` : 'Hear a Sound'}</span></button>
    )
}