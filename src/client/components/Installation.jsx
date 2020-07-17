import React from 'react';
import install1 from '../assets/install1.png';
import install2 from '../assets/install2.png';
import install3 from '../assets/install3.png';
import install4 from '../assets/install4.png';
import install5 from '../assets/install5.png';
import Contributors from './Contributors.jsx';

function Installation() {
  return (
    <div id='installationContainer'>
      <div>
        <h1>Installation</h1>
        <br />

        <p>Install the Recoilize npm module</p>
        <img className='installation_photos' src={install1} />
        <br />

        <p>Import RecoilizeDebugger from the module</p>
        <img className='installation_photos' src={install2} />
        <br />

        <p>
          Recoilize requires you to create a variable that grabs the HTML
          element where you inject your React application
        </p>
        <img className='installation_photos' src={install3} />
        <br />

        <p>
          You must import all your atoms and selectors and pass them into the
          Recoilize component as show above
        </p>
        <img className='installation_photos' src={install4} />
        <br />

        <p>Example:</p>
        <img className='installation_photos' src={install5} />
        <br />
        <br />
        <h2>Get Recoilize from the Chrome Store!</h2>
        <br />
        <h2>
          Open your application on the Chrome Browser and start debugging with
          Recoilize!
        </h2>
        <p>
          (Only supported with React applications using Recoil as state
          management)
        </p>
        <br />
        <h2>We will continue updating Recoilize alongside Recoil's updates!</h2>
        <br />
        <br />
        <Contributors />
      </div>
    </div>
  );
}

export default Installation;
