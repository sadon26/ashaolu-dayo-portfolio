import React, { useState } from 'react';
import { Project } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow } from 'swiper';
import { animateProjectContents } from 'utils/gsapAnimations';
import slides from 'helpers/slides';
import './_project.scss';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="h-screen relative">
      <div className="flex flex-col gap-y-4 project__paginator absolute">
        {slides.map((_, index) => (
          <div className={index === currentSlide ? 'active' : ''}></div>
        ))}
      </div>
      <Swiper
        modules={[Mousewheel, EffectCoverflow]}
        effect="coverflow"
        className="h-screen"
        slidesPerView="1"
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 1,
          forceToAxis: true,
          thresholdDelta: 50,
        }}
        direction="vertical"
        onSlideChange={(slide) => {
          animateProjectContents(slide);
          setCurrentSlide(slide.realIndex);
        }}
        onSwiper={() => animateProjectContents({ realIndex: 0 })}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Project slide={slide} index={index} slidesLiegth={slides.length} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
