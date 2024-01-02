'use client'

import React, { SyntheticEvent } from 'react';

interface ScrollElementProps {
  className: string;
}

const ScrollElement: React.FC<ScrollElementProps> = ({ className }) => {
    const smoothScrollToBottom = (duration: number) => {
        const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;
      
        const easeInOutQuart = (time: number, start: number, distance: number, duration: number) => {
          time /= duration / 2;
          if (time < 1) { return distance / 2 * time * time * time + start };
          time -= 2;
          return -distance / 2 * (time * time * time * time - 2) + start;
        };
      
        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime!;
          const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };
      
        requestAnimationFrame(animation);
      };

      const scrollToBottom = (e: SyntheticEvent) => {
        console.log('here is e', e);
        e.preventDefault();
        smoothScrollToBottom(2500);
      };
         

    return (
        <a href='#!' onClick={scrollToBottom} className={className}>Contact</a>
    )
}

export default ScrollElement;