'use client';

import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect } from 'react';
import CarouselCard from './CarouselCard';

interface Resource {
    title: string,
    url: string
}

type CarouselProps = {
    title: string,
    sheetMusic: Resource[]
}

export default function Carousel(props: CarouselProps) {

    useEffect(() => {
        const carousel = document.querySelector('.carousel-track') as HTMLElement;
        const elementWidth: number = 400;
        let index: number = 0;

        function moveForward() {
            index++;
            updateCarousel();
        }

        function moveBackward() {
            index--;
            updateCarousel();
        }

        function updateCarousel() {
            const offset: number = elementWidth * index;
            carousel!.style.transform = `translateX(${offset}px)`;
        }

        const leftArrow = document.getElementById('left-arrow');
        leftArrow?.addEventListener('click', moveForward);
        const rightArrow = document.getElementById('right-arrow');
        rightArrow?.addEventListener('click', moveBackward);

        return () => {
            leftArrow?.removeEventListener('click', moveForward);
            rightArrow?.removeEventListener('click', moveBackward);
        }
    }, []);

    return (
        <div className='carousel-container' id='book-carousel'>
            <FontAwesomeIcon icon={faChevronLeft} className='carousel-arrow' id='left-arrow' />
            <div className='image-carousel'>
                <div className='carousel-track'>
                    {
                        props.sheetMusic.map((el, i) => {
                            return <CarouselCard key={i} fileName={el.title} url={el.url} />
                        })
                    }
                    {/* <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/ICanReadMusicVolume1.jpeg' alt='I Can Read Music Volume 1' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/ICanReadMusicVolume2.jpeg' alt='I Can Read Music Volume 2' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/IntroducingThePositionsForViolinVolume1.jpg' alt='Introducing The Positions For Violin Volume 1' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/IntroducingThePositionsForViolinVolume2.jpg' alt='Introducing The Positions For Violin Volume 2' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/MelodiousDoubleStops.jpg' alt='Melodious Double Stops' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/Kreutzer42Studies.jpeg' alt='Kreutzer 42 Studies' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/ScalesForAdvancedViolinists.jpg' alt='Scales For Advanced Violinists' layout='fill' objectFit='contain' />
                    </div>
                    <div className='carousel-element'>
                        <a href='' className='carousel-hover-overlay'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                        </a>
                        <Image src='/MazasEtudesSpecialesOpus36Book1.jpeg' alt='Mazas Etudes Speciales Opus 36 Book 1' layout='fill' objectFit='contain' />
                    </div> */}
                </div>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className='carousel-arrow' id='right-arrow' />
        </div>
    )

}