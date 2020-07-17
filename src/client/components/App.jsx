import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import DocsComponent from './DocsComponent.jsx';
import TutorialComponent from './TutorialComponent.jsx';
import ContributingComponent from './ContributingComponent.jsx';
import HeroSection from './HeroSection.jsx';
import github from '../assets/Github-Mark-64px.png';
import recoilizeBlack from '../assets/recoilize-black.png';
import recoilizeGray from '../assets/recoilize-gray-01.png';
import recoilizeWhite from '../assets/recoilize-white-01.png';
import recoilizeRainbow from '../assets/recoilize-logo-new-01.png';

const App = () => {
  const [view, setView] = useState(0);
  const handleChange = (e, view) => {
    setView(view);
  };

  const [logo, setLogo] = useState();
  const randomLogo = [
    recoilizeBlack,
    recoilizeGray,
    recoilizeWhite,
    recoilizeRainbow,
  ];
  useEffect(() => {
    const randomize = Math.floor(Math.random() * 4);
    setLogo(randomLogo[randomize]);
  }, []);

  return (
    <div>
      <AppBar position='static' id='navbar'>
        <Toolbar variant='dense'>
          <img src={logo} id='navbar_logo' />
          <Tabs value={view} view={view} onChange={handleChange}>
            {/* tabs for when we need them dont delete */}
            {/* <Tab label='Docs' />
            <Tab label='Tutorial' />
            <Tab label='Contributing' /> */}
          </Tabs>
          Recoilize
          <a href='http://github.com/oslabs-beta/Recoilize'>
            <img id='github_link' src={github}></img>
          </a>
        </Toolbar>
      </AppBar>
      {/* tabs for when we need them dont delete */}
      {/* <DocsComponent view={view} index={0} />
      <TutorialComponent view={view} index={1} />
      <ContributingComponent view={view} index={2} /> */}
      <HeroSection />
    </div>
  );
};

export default App;
