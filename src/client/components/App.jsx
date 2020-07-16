import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import logo from '../assets/Recoilize.png';
import DocsComponent from './DocsComponent.jsx';
import TutorialComponent from './TutorialComponent.jsx';
import ContributingComponent from './ContributingComponent.jsx';
import HeroSection from './HeroSection.jsx';

const App = () => {
  const [view, setView] = useState(0);
  const handleChange = (e, view) => {
    setView(view);
  };
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
