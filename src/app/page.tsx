'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Parallax } from 'react-parallax';
import Image from 'next/image';
import Fader from '@/components/Fader';
import ContactForm from '@/components/ContactForm';
import ParallaxContent from '@/components/ParallaxContent';

export default function Home() {
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [hymnContentOpacity, setHymnContentOpacity] = useState(1);

  const backgroundImage: string = '/TingBackground.jpg';
  const tingVertical: string = '/tingvertical.jpg';

  const hymnProjectDescription = 'Becoming a violinist was not something I sat down and decided to do. It seemed to me rather that once I left that path, I could never go back. Maybe that is why, like a marriage, I still have to say yes to it every day. On days when music feels like a rat race, I try to conjure memories of when I was the most spiritually fulfilled - playing hymns for those who feel them deeply, and laying in tall prairie grass as a child, close to the Earth. This project is for experiencing both.'

  useEffect(() => {
    const handleScroll = () => {
      const mainTitle = document.getElementById('main-title');
      if (mainTitle) {
        const scrollY = window.scrollY;
        const titleRect = mainTitle.getBoundingClientRect();
        const newOpacity = Math.max(.2 - (scrollY - titleRect.top) / 600, 0);
        setTitleOpacity(newOpacity);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mainTitle = document.getElementById('hymn-project-content');
      if (mainTitle) {
        const scrollY = window.scrollY;
        const titleRect = mainTitle.getBoundingClientRect();
        const newOpacity = Math.max(4 - (scrollY - titleRect.top) / 600, 0);
        setHymnContentOpacity(newOpacity);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <Fader></Fader>
      <Parallax bgImage={backgroundImage} strength={500} className='parallax-1'>
        <div className='content'>
          <h2 className='title' id='main-title' style={{ opacity: titleOpacity }}>Hoi Ting Davidson, Violin</h2>
        </div>
      </Parallax>

      <Parallax bgImage={tingVertical} blur={{ min: -5, max: 10 }} strength={300} className='parallax-2'>
        <div className='content' id='hymn-project-content' style={{ opacity: hymnContentOpacity }}>
          <h2 className='title'>The Hymn Project</h2>
          <div className='horizontal-bar'></div>
          <p className='description-text'>{hymnProjectDescription}</p>
          <a href='/hymnProject' className='nav-item' id='nav-button'>Experience</a>
        </div>
      </Parallax>
      <Parallax bgImage={tingVertical} blur={{ min: -3, max: 3 }} strength={500} className='parallax-2' bgImageStyle={{ opacity: '.3' }}>
        <div className='bio-element'>
          Hello
        </div>
      </Parallax>
      <ParallaxContent>
          <ContactForm></ContactForm>
      </ParallaxContent>
    </div >
  )
}