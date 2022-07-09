import React from 'react';
import { Project } from 'components';
import InfohobLanding from 'assets/images/infohob-landing.jpg';
import KafeneLanding from 'assets/images/kafene-landing.jpg';
import InventoryLanding from 'assets/images/inventory-landing.jpg';
import IndigoLanding from 'assets/images/indigo-landing.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectCoverflow } from 'swiper';
import gsap, { Back, Elastic } from 'gsap';
import './_project.scss';

const Projects = () => {
  const slides = [
    {
      logo: InfohobLanding,
      alt: 'infohob-landing',
      title: 'Infohob',
      description: `A job portal application focused on techies which helps ease the stress of recruitment by bringing the
        job seeker and recruiter to the same platform.
      `,
      nextPage: 'https://infohob.com',
    },
    {
      logo: KafeneLanding,
      alt: 'kafene-landing',
      title: 'Kafene',
      description: `Customized lease application which add flexibility and affordability
         to your life and helps you get the products you want without having to pay for it all upfront.`,
      nextPage: 'https://kafene.com',
    },
    {
      logo: InventoryLanding,
      alt: 'inventory-landing',
      title: 'Inventory',
      description: `An Inventory Management System(IMS) which helps companies keep track of their warehouses, products, distributors, 
        vendors, sales and business performance.
      `,
      nextPage: 'https://staginginventory.enyata.com',
    },
    {
      logo: IndigoLanding,
      alt: 'indigo-landing',
      title: 'Indigo',
      description: `A medical software which connects all the processes between the patients and staffs from different hospitals 
        into a single, simple and easy to operate platform.
      `,
      nextPage: 'https://app.indigoemr.com/login',
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
      `.swiper-${slide.realIndex + 1} .project__heading-title`,
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        ease: Back,
      },
    );
    gsap.fromTo(
      `.swiper-${slide.realIndex + 1} .project__heading-separator`,
      {
        width: 0,
      },
      {
        delay: 1,
        duration: 2,
        width: '100%',
        ease: Elastic,
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
