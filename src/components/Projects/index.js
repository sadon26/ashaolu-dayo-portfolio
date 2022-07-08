import React from 'react';
import { Project } from 'components';
import InfohobLanding from 'assets/images/infohob-landing.jpg';
import KafeneLanding from 'assets/images/kafene-landing.jpg';
import InventoryLanding from 'assets/images/inventory-landing.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow } from 'swiper';
import gsap, { Back } from 'gsap';
import './_project.scss';

const Projects = () => {
  const slides = [
    {
      logo: InfohobLanding,
      alt: 'infohob-landing',
      title: 'Infohob',
      nextPage: 'https://infohob.com',
    },
    {
      logo: KafeneLanding,
      alt: 'kafene-landing',
      title: 'Kafene',
      nextPage: 'https://kafene.com',
    },
    {
      logo: InventoryLanding,
      alt: 'inventory-landing',
      title: 'Inventory',
      nextPage: 'https://staginginventory.enyata.com',
    },
  ];
  const animateElements = (slide) => {
    gsap.fromTo(
      `.swiper-${slide.realIndex + 1} img`,
      {
        scale: 1,
      },
      {
        scale: 1.2,
        duration: 1,
        delay: 1,
      },
    );
    gsap.fromTo(
      `.swiper-${slide.realIndex + 1} .project__description`,
      {
        y: 200,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        ease: Back,
      },
    );
  };

  return (
    <div className="h-screen">
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
        onSlideChange={(slide) => animateElements(slide)}
        onSwiper={() => animateElements({ realIndex: 0 })}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Project slide={slide} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
