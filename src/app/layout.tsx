import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import './globals.css';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Hoi Ting Davidson, Violinist',
  description: 'The official website of Hoi Ting Davidson.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preload' href='/TingBackground.jpg' as='image'></link>
      </head>
      <body>
        <nav className='nav-bar'>
          <ul className='nav-bar-left'>
            <li>
              <a href='' className='nav-item'>Home</a>
            </li>
            <li>
              <a href='' className='nav-item'>Music</a>
            </li>
            <li>
              <a href='' className='nav-item'>Studio</a>
            </li>
          </ul>
          <ul className='nav-bar-right'>
            <li>
              <a href='https://www.instagram.com/ting_violin' className='nav-item'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@tingdavidson' className='nav-item'>Youtube</a>
            </li>
            <li>
              <a href='' className='nav-item'>Contact</a>
            </li>
            <li className='drop-down'>Professional
              <ul className='nav-drop-down'>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonBiography.pdf' download className='nav-item'>Biography</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonPerformingCV.pdf' download className='nav-item'>Resume</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonHeadshot.png' download className='nav-item'>Headshot</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
