import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import ScrollElement from '../components/ScrollElement';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hoi Ting Davidson, Violinist',
  description: 'The official website of Hoi Ting Davidson.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let style = children.props.childProp.segment === 'hymnProject' ? 'nav-item-hymn' : 'nav-item';
  let dropDownStyle = children.props.childProp.segment === 'hymnProject' ? 'drop-down-hymn' : 'drop-down';
  
  return (
    <html lang='en'>
      <head>
        <link rel='preload' href='/TingBackground.jpg' as='image'></link>
        <script src='https://www.google.com/recaptcha/api.js' async defer></script>
      </head>
      <body>
        <nav className='nav-bar'>
          <ul className='nav-bar-left'>
            <li>
              <a href='' className={style}>Home</a>
            </li>
            <li>
              <a href='' className={style}>Studio</a>
            </li>
            <li>
              <a href='/hymnProject' className={style}>The Hymn Project</a>
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
              <ScrollElement className={style}/>
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
      </body>
    </html>
  )
}
