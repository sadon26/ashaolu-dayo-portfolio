import React from 'react';

const Project = ({ slide, index }) => {
  return (
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
  );
};

export default Project;
