'use client';

import { Parallax } from "react-parallax";

export default function ParallaxContent({ children }: {children: React.ReactNode}): JSX.Element {
    const backgroundImage: string = '/TingBackground.jpg';

    return (
        <Parallax bgImage={backgroundImage} strength={-500}>
        <div className='content'>
          {children}
        </div>
      </Parallax>
    )
}