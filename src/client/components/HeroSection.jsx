import React, { useState, useEffect } from 'react';
import atomNetworkGif from '../assets/atom-network.gif';
import componentGraphGif from '../assets/component-graph.gif';
import stateDiffGif from '../assets/state-diff.gif';
import stateGraphGif from '../assets/state-graph.gif';
import stateTreeGif from '../assets/state-tree.gif';
import Installation from './Installation.jsx';
import logo from '../assets/recoilize-white-01.png';

function HeroSection() {
  return (
    <div id='mainContainer'>
      <div id='hero_logo'>
        <img src={logo} id='hero' />
      </div>
      <h1 id='RECOILIZE' align='center'>
        Recoilize
      </h1>
      <h3 align='center' className='secondaryText'>
        A Chrome Dev Tool meant for debugging applications built with the new
        Recoil.js state management library
      </h3>
      <br />
      <br />
      <h1 align='center'>** STILL IN BETA **</h1>
      <h1 align='center'>* Recoilize uses unstable APIs *</h1>
      <div id='gif_section'>
        <div className='gifPositioning'>
          <p className='secondaryText'>
            Shows the difference in atoms and selectors from previous renders
            <br />
            <div align='center' className='demoGifs'>
              <img className='gifPositioning' src={stateDiffGif} />
            </div>
          </p>
        </div>

        <div className='gifPositioning'>
          <p className='secondaryText'>
            View your atoms and selectors in a collapisble tree
            <br />
            <div align='center' className='demoGifs'>
              <img className='gifPositioning' src={stateTreeGif} />
            </div>
          </p>
        </div>

        <div className='gifPositioning'>
          <p className='secondaryText'>
            Visualize all your atom and selector values in a tree graph
            <br />
            <div align='center' className='demoGifs'>
              <img className='gifPositioning' src={stateGraphGif} />
            </div>
          </p>
        </div>

        <div className='gifPositioning'>
          <p className='secondaryText'>
            Display how all your atoms and selectors relate to each other
            <br />
            <div align='center' className='demoGifs'>
              <img className='gifPositioning' src={atomNetworkGif} />
            </div>
          </p>
        </div>

        <div className='gifPositioning'>
          <p className='secondaryText'>
            See which of your React components are subscribed to certain atoms
            and selectors
            <br />
            <div align='center' className='demoGifs'>
              <img className='gifPositioning' src={componentGraphGif} />
            </div>
          </p>
        </div>
      </div>
      <br />
      <br />
      <Installation />
    </div>
  );
}

export default HeroSection;
