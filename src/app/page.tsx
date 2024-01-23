'use client'

import { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Fader from '../components/Fader';
import ContactForm from '@/components/ContactForm';
import ParallaxContent from '@/components/ParallaxContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

export default function Home() {
  const [titleOpacity, setTitleOpacity] = useState(1);
  const [hymnContentOpacity, setHymnContentOpacity] = useState(1);
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  const backgroundImage: string = '/TingBackground.jpg';
  const tingVertical: string = '/tingvertical.jpg';
  const hymnalBackground: string = '/HymnalWithCandles.JPG';

  const hymnProjectDescription: string = '"I always felt there was something special about playing these simple hymns for people who resonated with them so deeply. Without words, these pieces carry the meaning of their structure - a collection of what remains true and sacred as sifted through generations. When I contemplate my purpose as an artist, I conjure memories of when I was the most spiritually fulfilled - playing hymns for those who feel them deeply, and laying in tall, prairie grass as a child, close to the Earth. This project is for experiencing both."'
  const shortBio1: string = 'Violinist Hoi Ting Davidson is an active performer and educator in the greater Houston region. With a background in classical performance, Davidson holds a BM from the Eastman School of Music and a MM from the University of Texas at Austin where she was concertmaster and concertino soloist with the UT Symphony Orchestra. She currently works as a member of the River Oaks Quartet which performs regularly as part of the international Candlelight Concert series and at other events such as a recent gala for former vice president Mike Pence. She also plays with Quartetrachord, which performs their own compositions and arrangements in addition to works of the classical genre. Her freelance career has led her to perform across Austria, China, and throughout the US including concerts as lead violinist on Two Cellos’ tour and for the SXSW Amazon Prime promotion of the popular TV series “Good Omens.”';
  const shortBio2: string = 'In addition to performing, she teaches violin on the faculty of the Paganini School of Music and at the Small Victories Foundation, a nonprofit helping people with traumatic brain injuries. Her pedagogy training includes Suzuki certification with Dr. Laurie Scott, Teri Einfeldt, and Mark Mutter. In her spare time, Davidson enjoys working on her passion projects including the study of Argentine tango music and composing.'

  useEffect(() => {
    const handleScroll = () => {
      const mainTitle = document.getElementById('main-title');
      if (mainTitle) {
        const scrollY = window.scrollY;
        const titleRect = mainTitle.getBoundingClientRect();
        const newOpacity = Math.max(.2 - ((scrollY - 650) - titleRect.top) / 600, 0);
        setTitleOpacity(newOpacity);
      }
    }


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsWideScreen(window.innerWidth > 800);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hymnProjectContent = document.getElementById('hymn-project-content');
      if (hymnProjectContent) {
        const scrollY = window.scrollY;
        const titleRect = hymnProjectContent.getBoundingClientRect();
        const newOpacity = Math.max(3 - (scrollY - titleRect.top) / 600, 0);
        setHymnContentOpacity(newOpacity);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <Fader></Fader>
      {
        isWideScreen ?
          <Parallax bgImage={backgroundImage} strength={500} className='parallax-1'>
            <div className='content' id='full-height-content'>
              <h2 className='title' id='main-title' style={{ opacity: titleOpacity }}>Hoi Ting Davidson<br></br>Violin</h2>
            </div>
          </Parallax>
          :
          <div className='parallax-1' style={{width: '100%', height: '100vh', overflow: 'hidden'}}>
            <Image src={backgroundImage} alt='Background of Ting playing violin' layout='fill' objectFit='cover' className='landing-img-replacement' />
              <div >
                <h2 className='title' id='main-title' style={{ opacity: titleOpacity }}>Hoi Ting Davidson<br></br>Violin</h2>
              </div>
          </div>
      }
      <Parallax bgImage={hymnalBackground} blur={15} strength={850} className='parallax-2'>
        <div className='content' id='hymn-content'>
          <div className='content' id='hymn-project-content' style={{ opacity: hymnContentOpacity }}>
            <h2 className='title'>The Hymn Project</h2>
            <div className='horizontal-bar'></div>
            <p className='description-text'>{hymnProjectDescription}</p>
            <a href='/thehymnproject' className='nav-item' id='nav-button'>Experience</a>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={tingVertical} blur={{ min: -3, max: 3 }} strength={500} className='parallax-2' bgImageStyle={{ opacity: '.3' }}>
        <div className='bio-element'>
          <h3 className='bio-title'>About</h3>
          <p className='bio-quote'>&quot;She plays with duende, something many artists don&apos;t have.&quot;</p>
          <div className='horizontal-line'></div>
          <p className='short-bio'>{shortBio1}<br></br><br></br>{shortBio2}</p>
          <div className='bio-download-div'>
            <a href='/HoiTingDavidsonBiography.pdf' download className='bio-download'>Download Biography
              <FontAwesomeIcon icon={faCircleDown} className='download-svg' id='bio-download-svg' />
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