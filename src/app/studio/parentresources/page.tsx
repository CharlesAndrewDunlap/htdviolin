'use client';

import Fader from '@/components/Fader';
import StudioBannerParallax from '@/components/StudioBannerParallax';
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect } from 'react';

export default function ParentResources() {

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
        <>
            <StudioBannerParallax page='parent' />
            <div className='carousel-container' id='book-carousel'>
                <FontAwesomeIcon icon={faChevronLeft} className='carousel-arrow' id='left-arrow' />
                <div className='image-carousel'>
                    <div className='carousel-track'>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                        <div className='carousel-element'>
                            <a href='' className='carousel-hover-overlay'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='carousel-svg' />
                            </a>
                            <Image src='/ICanReadMusic.jpeg' alt='I Can Read Music Volume 1' width={600} height={474} layout='responsive' />
                        </div>
                    </div>
                </div>

                <FontAwesomeIcon icon={faChevronRight} className='carousel-arrow' id='right-arrow' />
            </div>
            <Fader />
        </>
    )
}