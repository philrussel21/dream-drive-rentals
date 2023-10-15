'use client';

import {collapse} from '@growthops/ext-ts';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import {useCallback, useState} from 'react';

type CarouselProperties = {
  children: JSX.Element[];
};

const Carousel = ({children}: CarouselProperties): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = useCallback(() => {
    if (activeSlide === children.length - 1) return;
    setActiveSlide((activeSlide) => activeSlide + 1);
  }, [activeSlide]);

  const handlePreviousSlide = useCallback(() => {
    if (activeSlide === 0) return;
    setActiveSlide((activeSlide) => activeSlide - 1);
  }, [activeSlide]);

  return (
    <div className="flex justify-center space-x-10">
      <div className="flex items-center justify-center">
        <button
          type="button"
          disabled={activeSlide === 0}
          className="p-4 rounded-full bg-gray-300 hover:bg-gray-500 disabled:opacity-30 disabled:pointer-events-none"
          onClick={handlePreviousSlide}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="w-5" />
        </button>
      </div>
      <div>{children[activeSlide]}</div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          disabled={activeSlide === children.length - 1}
          className="p-4 rounded-full bg-gray-300 hover:bg-gray-500 disabled:opacity-30 disabled:pointer-events-none"
          onClick={handleNextSlide}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

export type {CarouselProperties as CarouselProps};
