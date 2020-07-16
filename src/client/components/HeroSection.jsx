import React from 'react';
import logo from '../assets/Recoilize.png';
import atomNetworkGif from '../assets/atom-network.gif';
import componentGraphGif from '../assets/component-graph.gif';
import stateDiffGif from '../assets/state-diff.gif';
import stateGraphGif from '../assets/state-graph.gif';
import stateTreeGif from '../assets/state-tree.gif';
import Installation from './Installation.jsx';

function HeroSection() {
  return (
    <div>
      <div id='hero_logo'>
        <img src={logo} />
      </div>
      <h2 align='center'>
        Recoilize is a Chrome Dev Tool meant for debugging applications built
        with the new Recoil.js state management library!
      </h2>
      <br />
      <br />
      <h1 align='center'>** STILL IN BETA **</h1>
      <div id='gif_section'>
        <div className='gifPositioning'>
          <h3>
            Shows the difference in atoms and selectors from the previous render
            <br />
            <div align='center'>
              <img className='gifPositioning' src={stateDiffGif} />
            </div>
          </h3>
        </div>

        <div className='gifPositioning'>
          <h3>
            View your atoms and selectors in a collapisble tree
            <br />
            <div align='center'>
              <img className='gifPositioning' src={stateTreeGif} />
            </div>
          </h3>
        </div>

        <div className='gifPositioning'>
          <h3>
            Visualize all your atom and selector values in a tree graph
            <br />
            <div align='center'>
              <img className='gifPositioning' src={stateGraphGif} />
            </div>
          </h3>
        </div>

        <div className='gifPositioning'>
          <h3>
            Display how all your atoms and selectors relate to each other
            <br />
            <div align='center'>
              <img className='gifPositioning' src={atomNetworkGif} />
            </div>
          </h3>
        </div>

        <div className='gifPositioning'>
          <h3>
            See which of your React components are subscribed to certain atoms
            and selectors
            <br />
            <div align='center'>
              <img className='gifPositioning' src={componentGraphGif} />
            </div>
          </h3>
        </div>
      </div>
      <br />
      <br />
      <Installation />
    </div>
  );
}

export default HeroSection;
