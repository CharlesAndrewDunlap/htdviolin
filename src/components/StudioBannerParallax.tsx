'use client';

import { Parallax } from 'react-parallax';

export default function StudioBannerParallax() {
    return (
        <Parallax bgImage='/SheetMusicBanner.JPG' bgImageAlt='Sheet Music With Violin' strength={-500} bgImageStyle={{opacity: '.45'}}>
            <div className='content' id='studio-banner'>
                <h3 className='studio-banner-subtitle'>Suzuki Violin Lessons</h3>
                <h2 className='studio-banner-title'>Davidson Studio</h2>
            </div>
        </Parallax>
    )
}