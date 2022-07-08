import React from 'react';
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
  return (
    <div className="h-screen">
      <Swiper
        modules={[Mousewheel, EffectCoverflow]}
        effect="coverflow"
        className="h-screen"
        slidesPerView="1"
        loop
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 1,
          forceToAxis: true,
          thresholdDelta: 50,
        }}
        direction="vertical"
        onSlideChange={(slide) => {
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
            },
            {
              y: 0,
              duration: 1,
              delay: 1,
              ease: Back,
            },
          );
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <div className={`h-screen swiper-${index + 1} relative`}>
              <div className="h-full">
                <img className="w-full h-full fit-image" src={slide.logo} alt={slide.alt} />
              </div>
              <div className="project__description absolute">
                <h1 className="fs-43 fw-600">{slide.title}</h1>
                <a className="fs-12" href={slide.nextPage} target="_blank" rel="noreferrer">
                  VISIT SITE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
