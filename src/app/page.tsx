'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Parallax } from 'react-parallax';
import Image from 'next/image';
import Fader from '@/components/Fader';
import ContactForm from '@/components/ContactForm';
import ParallaxContent from '@/components/ParallaxContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [hymnContentOpacity, setHymnContentOpacity] = useState(1);

  const backgroundImage: string = '/TingBackground.jpg';
  const tingVertical: string = '/tingvertical.jpg';

  const hymnProjectDescription: string = 'Becoming a violinist was not something I sat down and decided to do. It seemed to me rather that once I left that path, I could never go back. Maybe that is why, like a marriage, I still have to say yes to it every day. On days when music feels like a rat race, I try to conjure memories of when I was the most spiritually fulfilled - playing hymns for those who feel them deeply, and laying in tall prairie grass as a child, close to the Earth. This project is for experiencing both.'
  const shortBio1: string = 'Violinist Hoi Ting Davidson is an active performer and educator in the greater Houston region. With a background in classical performance, Davidson holds a BM from the Eastman School of Music and a MM from the University of Texas at Austin where she was concertmaster and concertino soloist with the UT Symphony Orchestra. She currently works as a member of the River Oaks Quartet which performs regularly as part of the international Candlelight Concert series and at other events such as a recent gala for former vice president Mike Pence. She also plays with Quartetrachord, which performs their own compositions and arrangements in addition to works of the classical genre. Her freelance career has led her to perform across Austria, China, and throughout the US including concerts as lead violinist on Two Cellos’ tour and for the SXSW Amazon Prime promotion of the popular TV series “Good Omens.”';
  const shortBio2: string = 'In addition to performing, she teaches violin on the faculty of the Paganini School of Music and at the Small Victories Foundation, a nonprofit helping people with traumatic brain injuries. Her pedagogy training includes Suzuki certification with Dr. Laurie Scott, Teri Einfeldt, and Mark Mutter. In her spare time, Davidson enjoys working on her passion projects including the study of Argentine tango music and composing.'

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
            <h3 className='bio-title'>Bio</h3>
            <p className='bio-quote'>&quot;She plays with duende, something many artists don&apos;t have.&quot;</p>
            <div className='horizontal-line'></div>
            <p className='short-bio'>{shortBio1}<br></br><br></br>{shortBio2}</p>
            <div className='bio-download-div'>
            <a href='/HoiTingDavidsonBiography.pdf' download className='bio-download'>Download Biography
            <FontAwesomeIcon icon={faCircleDown} className='download-svg' id='bio-download-svg'/>
            </a>
            </div>
          </div>
      </Parallax>
      <ParallaxContent>
          <ContactForm></ContactForm>
      </ParallaxContent>
    </div >
  )
}