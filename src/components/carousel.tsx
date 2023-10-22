'use client';

import {collapse} from '@growthops/ext-ts';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import {useCallback, useState} from 'react';

type CarouselProperties = {
  children: JSX.Element[];
};

const navButtonClasses = collapse(`
  p-4
  rounded-full
  bg-brand-charcoal
  text-brand-gold
  active:scale-90
  hover:bg-brand-gold
  hover:text-brand-charcoal
  disabled:opacity-30
  disabled:pointer-events-none
`);

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
    <div className="space-y-8">
      <div className="md:hidden flex justify-center">
        {children[activeSlide]}
      </div>
      <div className="flex justify-center space-x-10">
        <div className="flex items-center justify-center">
          <button
            type="button"
            disabled={activeSlide === 0}
            className={navButtonClasses}
            onClick={handlePreviousSlide}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="w-5 fill-current" />
          </button>
        </div>
        <div className="hidden md:block">{children[activeSlide]}</div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            disabled={activeSlide === children.length - 1}
            className={navButtonClasses}
            onClick={handleNextSlide}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="w-5 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

export type {CarouselProperties as CarouselProps};
