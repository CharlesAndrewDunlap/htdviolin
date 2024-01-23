'use client';

import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
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
    const [validRightArrow, setValidRightArrow] = useState<Boolean>(true);
    const [validLeftArrow, setValidLeftArrow] = useState<Boolean>(false);
    const indexRef = useRef<number>(0);

    useEffect(() => {
        const carousel = document.querySelector('.carousel-track') as HTMLElement;
        const viewableArea = document.querySelector('.image-carousel') as HTMLElement;
        const elementWidth: number = 400;
        let amountShifted: number = viewableArea.clientWidth;
        let carouselWidth: number = elementWidth * props.sheetMusic.length;
        let index: number = 0;

        function moveForward() {
            if (validLeftArrow) {
                indexRef.current += 1;
                if (!validRightArrow) {
                    setValidRightArrow(true);
                }
                updateCarousel();
            }
        }

        function moveBackward() {
            if (validRightArrow) {
                indexRef.current -= 1;
                console.log('here is index', index);
                updateCarousel();
            }
        }

        function updateCarousel() {
            const offset: number = elementWidth * indexRef.current;
            amountShifted += elementWidth;
            console.log(Math.abs(offset) + viewableArea.clientWidth);
            console.log('carousel width:', carouselWidth);
            if (Math.abs(offset) + viewableArea.clientWidth > carouselWidth) {
                setValidRightArrow(false);
            }
            else if (indexRef.current === 0) {
                setValidLeftArrow(false);
            }
            else if (indexRef.current !== 0) {
                setValidLeftArrow(true);
            }
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
    }, [validLeftArrow, validRightArrow]);

    return (
        <div className='carousel-component'>
            <h2 className='carousel-title'>{props.title}</h2>
        <div className='carousel-container' id='book-carousel'>
            <FontAwesomeIcon icon={faChevronLeft} className='carousel-arrow' id='left-arrow' style={{ opacity: validLeftArrow ? 1 : 0.3 }}/>
            <div className='image-carousel'>
                <div className='carousel-track'>
                    {
                        props.sheetMusic.map((el, i) => {
                            return <CarouselCard key={i} fileName={el.title} url={el.url} />
                        })
                    }
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='carousel-arrow' id='right-arrow' style={{ opacity: validRightArrow ? 1 : 0.3 }} />
        </div>
        </div>
    )
}