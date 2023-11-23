'use client'

import styles from './page.module.css';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

export default function Home() {
  const backgroundImage: string = '/TingBackground.jpg';
  const tingVertical: string = '/tingvertical.jpg';

  const hymnProjectDescription = 'Becoming a violinist was not something I sat down and decided to do. It seemed to me rather that once I left that path, I could never go back. Maybe that is why, like a marriage, I still have to say yes to it every day. On days when music feels like a rat race, I try to conjure memories of when I was the most spiritually fulfilled - playing hymns for those who feel them deeply, and laying in tall prairie grass as a child, close to the Earth. This project is for experiencing both.'

  return (
    <div className='App'>
      <Parallax bgImage={backgroundImage} strength={600} className='parallax-1'>
        <div className='content'>
          <div className='title' id='main-title'>Hoi Ting Davidson, Violin</div>
        </div>
      </Parallax>

      <Parallax bgImage={tingVertical} blur={{ min: -5, max: 10 }} strength={300} className='parallax-2'>
        <div className='content'>
          <h2 className='title'>The Hymn Project</h2>
          <h3 className='subtitle'>. . .coming soon</h3>
          <div className='horizontal-bar'></div>
          <p className='description-text'>{hymnProjectDescription}</p>
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
