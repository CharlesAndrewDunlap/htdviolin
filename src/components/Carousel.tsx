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
        const viewableArea = document.querySelector('.image-carousel') as HTMLElement;
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
        <div className='carousel-component'>
            <h2 className='carousel-title'>{props.title}</h2>
        <div className='carousel-container' id='book-carousel'>
            <FontAwesomeIcon icon={faChevronLeft} className='carousel-arrow' id='left-arrow' />
            <div className='image-carousel'>
                <div className='carousel-track'>
                    {
                        props.sheetMusic.map((el, i) => {
                            return <CarouselCard key={i} fileName={el.title} url={el.url} />
                        })
                    }
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='carousel-arrow' id='right-arrow' />
        </div>
        </div>
    )

}