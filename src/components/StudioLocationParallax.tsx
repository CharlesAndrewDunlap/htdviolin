'use client';

import { Parallax } from 'react-parallax';

export default function StudioLocationParallax({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <Parallax bgImage='SheetMusicBackground.JPG'>
            {children}
        </Parallax>
    )
}