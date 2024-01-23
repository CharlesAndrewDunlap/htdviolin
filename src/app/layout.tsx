import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';
import ScrollElement from '../components/ScrollElement';
import React, { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hoi Ting Davidson, Violinist',
  description: 'The official website of Hoi Ting Davidson.',
  keywords: ['Ting', 'Davidson', 'Violin', 'Hymn', 'Project', 'Studio', 'Hoi', 'Music'],
  authors: [{ name: 'Hoi Ting Davidson' }],
  creator: 'Charles Andrew Dunlap'
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600']
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  let style = typeof children === 'object' && 'props' in children! && children.props?.childProp.segment === 'thehymnproject' ? 'nav-item-hymn' : 'nav-item';
  let dropDownStyle = typeof children === 'object' && 'props' in children! && children?.props?.childProp.segment === 'thehymnproject' ? 'drop-down-hymn' : 'drop-down';

  return (
    <html lang='en' className={montserrat.className}>
      <head>
        {/* <link rel='preload' href='/TingBackground.jpg' as='image'></link> */}
        {/* <link href='https://fonts.googleapis.com/css?family=Montserrat&display=optional' rel='stylesheet'></link> */}
        <link rel='icon' href='/favicon.ico'></link>
        <link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png'></link>
        <link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png'></link>
        <link rel='shortcut icon' href='/favicon.ico'></link>
        <script src='https://www.google.com/recaptcha/api.js' async defer></script>
      </head>
      <body>
        <nav className='nav-bar'>
          <ul className='nav-bar-left'>
            <li>
              <a href='/' className={style}>Home</a>
            </li>
            <li className={dropDownStyle}>Studio
              <ul className='nav-drop-down'>
                <li className='drop-down-item'>
                  <a href='/studio' className={style}>Studio Home</a>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} className='download-svg' id='nav-arrow' />
                </li>
                <li className='drop-down-item'>
                  <a href='/studio/parentresources' className={style}>Parent Resources</a>
                  <FontAwesomeIcon icon={faChevronRight as IconProp} className='download-svg' id='nav-arrow' />
                </li>
              </ul>
            </li>
            <li>
              <a href='/thehymnproject' className={style}>The Hymn Project</a>
            </li>
          </ul>
          <ul className='nav-bar-right'>
            <li>
              <a href='https://www.instagram.com/ting_violin' target='_blank' className={style}>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@tingdavidson' target='_blank' className={style}>Youtube</a>
            </li>
            <li>
              <ScrollElement className={style} />
            </li>
            <li className={dropDownStyle}>Professional
              <ul className='nav-drop-down'>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonBiography.pdf' download className={style}>Artist Biography</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonPerformingCV.pdf' download className={style}>Resume</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
                <li className='drop-down-item'>
                  <a href='/HoiTingDavidsonHeadshot.png' download className={style}>Photo</a>
                  <FontAwesomeIcon icon={faCircleDown} className='download-svg' />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
