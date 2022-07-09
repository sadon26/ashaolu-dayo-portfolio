import gsap, { Back, Elastic } from 'gsap';

export const animateProjectContents = (slide) => {
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
      x: 40,
    },
    {
      x: 0,
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
      y: 100,
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
