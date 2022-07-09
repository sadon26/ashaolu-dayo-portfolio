import React from 'react';
import { ReactComponent as GithubLogo } from 'assets/icons/github.svg';
import { ReactComponent as LinkedInLogo } from 'assets/icons/linkedin.svg';

const SocialIcons = () => {
  const socials = [
    {
      logo: GithubLogo,
      nextPage: 'https://github.com/sadon26',
    },
    {
      logo: LinkedInLogo,
      nextPage: 'https://www.linkedin.com/in/dayo-ashaolu-928bb6191/',
    },
  ];
  
  return (
    <div className="side__drawer-links flex justify-center gap-x-4 absolute">
      {socials.map(({ logo: Logo, nextPage }, index) => (
        <a key={index} href={nextPage} target="_blank" rel="noreferrer">
          <Logo />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
