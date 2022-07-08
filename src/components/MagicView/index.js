import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_magic-view.scss';
import ComputerOnTable from 'assets/images/computer-on-table.png';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Projects } from 'components';

const MagicView = ({ showMenu }) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={showProjects}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade-two"
          mountOnEnter
          unmountOnExit
        >
          {!showProjects ? (
            <div className={`flex justify-between flex-grow shrink-0 magic__view ${showMenu ? 'active' : ''}`}>
              <div className="flex flex-col justify-center pl-32 basis-4/6">
                <h1 className="fs-18 mb-12">Hi, I'm Ashaolu Dayo</h1>
                <p className="fw-600 fs-70 lh-85 mb-4">
                  Graphics Designer & <br /> Front End Developer
                </p>
                <button onClick={() => setShowProjects(!showProjects)} className="btn btn--primary">
                  View Projects
                </button>
              </div>
              <div className="shrink-0">
                <div style={{ width: '580px' }} className="h-full">
                  <img src={ComputerOnTable} className="w-full h-full" alt="computer-on-table" />
                </div>
              </div>
            </div>
          ) : (
            <div className={`flex-grow shrink-0 magic__view ${showMenu ? 'active' : ''}`}>
              <Projects />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

MagicView.propTypes = {
  showMenu: PropTypes.bool,
};

export default MagicView;
