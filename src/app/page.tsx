'use client'

import styles from './page.module.css';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function Home() {
  const backgroundImage: string = '/TingBackground.jpg';
  const tingVertical: string = '/tingvertical.jpg';

  return (
    <div className='App'>
      <Parallax bgImage={backgroundImage} strength={600} className='parallax-1'>
        <div className='content'>
          <div className='title'>Hoi Ting Davidson, Violin</div>
        </div>
      </Parallax>

      <Parallax bgImage={tingVertical} blur={{ min: -5, max: 10 }} strength={300} className='parallax-2'>
        <div className='content'>
          <div className='title'>Hoi Ting Davidson, Violin</div>
        </div>
      </Parallax>

      <Parallax bgImage={backgroundImage} strength={-500}>
        <div className='content'>
          <div className='title'>Hoi Ting Davidson, Violin</div>
        </div>
      </Parallax>
    </div>

  )
}
