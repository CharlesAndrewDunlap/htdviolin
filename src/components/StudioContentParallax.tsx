'use client';

import { Parallax } from 'react-parallax';

export default function StudioContentParallax({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <Parallax bgImage='ViolinWithMusic.JPG' blur={7} strength={300}>
            {children}
        </Parallax>
    )
}