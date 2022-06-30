import React, { useState } from 'react';
import './_side-drawer.scss';
import { ReactComponent as DayoLogo } from 'assets/icons/dayo-logo.svg';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { About, Services, Contact } from 'components';

const SideDrawer = ({ showMenu, setshowMenu }) => {
  const [activeTab, setActiveTab] = useState('ABOUT');

  const tabs = ['ABOUT', 'SERVICES', 'CONTACT'];

  return (
    <div className="relative w-20 z-10">
      <nav className="h-screen flex justify-center items-center side__drawer relative">
        <div onClick={() => setshowMenu(!showMenu)} className="w-12 h-12 cursor-pointer">
          <DayoLogo />
        </div>
      </nav>

      <div className={`absolute side__drawer-menu overflow-hidden${showMenu ? ' active ' : ''}`}>
        <div className="flex flex-col justify-between h-full">
          <div className={`side__drawer-content pl-12 pt-40${showMenu ? ' pr-12 active' : ''}`}>
            <div className="flex gap-x-8 mb-8">
              {tabs.map((tab, index) => (
                <span
                  className={`fs-13 fw-600 p-2 side__drawer-tab cursor-pointer color-yellow ${
                    activeTab === tab ? 'active' : ''
                  }`}
                  key={index}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={activeTab}
                  addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
                  classNames="fade"
                  mountOnEnter
                  unmountOnExit
                >
                  {activeTab === 'ABOUT' ? <About /> : activeTab === 'CONTACT' ? <Contact /> : <Services />}
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
      <div className="side__drawer-overlay"></div>
    </div>
  );
};

SideDrawer.propTypes = {
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func,
};

export default SideDrawer;
