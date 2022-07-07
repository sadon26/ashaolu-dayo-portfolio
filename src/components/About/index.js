import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="fs-27 color-yellow fw-600 mb-8 flex flex-col lh-28">
        <span>Focused</span> <span>Passionate</span> <span>Creative</span>
      </h2>
      <p className="fs-13">
        Currently I'm a web developer, who works with a variety of clients and on many diverse projects. I work to
        create innovative solutions that inspire, and foster memorable relationships between brands and their clients.{' '}
        <br />
        <br />
      </p>
      <p className="fs-12 mb-8">
        With a focus on the Web, I strive to create usable and polished products through passionate and deliberate
        design.
      </p>

      <a
        href="https://docs.google.com/document/d/1BhFyBmvpW-hcm0x0vlUwRtUCUHIYwRCoo-0FNC3RSOo/edit"
        target="_blank"
        rel="noreferrer"
        className="fs-12 color-gray fw-500 text-capitalize"
      >
        VIEW RESUME
      </a>
    </div>
  );
};

export default About;
