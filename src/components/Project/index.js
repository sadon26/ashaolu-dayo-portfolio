import React from 'react';

const Project = ({ slide, index, slidesLiegth }) => {
  return (
    <div className={`h-screen swiper-${index + 1} relative`}>
      <div className="h-full">
        <img className="w-full h-full fit-image" src={slide.logo} alt={slide.alt} />
      </div>
      <div className="project__heading w-full absolute">
        <p className="fs-17 mb-2 display-block project__heading-title fw-600">
          PROJECT {index + 1} / {slidesLiegth}
        </p>
        <div className="project__heading-separator" />
      </div>
      <div className="project__description absolute w-60">
        <h1 className="fs-43 fw-600 mb-2">{slide.title}</h1>
        <p className="fs-14 mb-4">{slide.description}</p>
        <a className="fs-12" href={slide.nextPage} target="_blank" rel="noreferrer">
          VISIT SITE
        </a>
      </div>
    </div>
  );
};

export default Project;
