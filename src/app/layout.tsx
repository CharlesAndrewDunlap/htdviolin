import type { Metadata } from 'next';
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
  return (
    <html lang='en'>
      <head>
        <link rel='preload' href='/TingBackground.jpg' as='image'></link>
      </head>
      <body>
        <nav className='nav-bar'>
          <ul className='nav-bar-left'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Music</a>
            </li>
            <li>
              <a href=''>Studio</a>
            </li>
          </ul>
          <ul className='nav-bar-right'>
            <li className='drop-down'>Professional
              <ul className='nav-drop-down'>
                <li>
                  Biography
                </li>
                <li>
                  Resume
                </li>
                <li>
                  Headshot
                </li>
              </ul>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
            <li>
              <a href=''>
                Instagram
              </a>
            </li>
            <li>
              <a href=''>Youtube</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
