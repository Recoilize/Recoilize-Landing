import React from 'react';
import install1 from '../assets/install1.png';
import install2 from '../assets/install2.png';
import install3 from '../assets/install3.png';
import install4 from '../assets/install4.png';
import install5 from '../assets/install5.png';

function Installation() {
  return (
    <div>
      <h1>Installation</h1>
      <br />

      <h3>Install the Recoilize npm module</h3>
      <img src={install1} />
      <br />

      <h3>Import RecoilizeDebugger from the module</h3>
      <img src={install2} />
      <br />

      <h3>
        Recoilize requires you to create a variable that grabs the HTML element
        where you inject your React application
      </h3>
      <img src={install3} />
      <br />

      <h3>
        You must import all your atoms and selectors and pass them into the
        Recoilize component as show above
      </h3>
      <img src={install4} />
      <br />

      <h3>Example:</h3>
      <img src={install5} />
      <br />
      <br />
      <h2>Get Recoilize from the Chrome Store!</h2>
      <br />
      <h2>
        Open your application on the Chrome Browser and start debugging with
        Recoilize!
      </h2>
      <h3>
        (Only supported with React applications using Recoil as state
        management)
      </h3>
      <br />
      <h1>We will continue updating Recoilize alongside Recoil's updates!</h1>
      <br />
      <br />
      <h3>Contributors</h3>
      <h4>
        <a
          className='contributors'
          href='http://github.com/brenyama'
          target='_blank'>
          Bren Yamaguchi
        </a>
      </h4>
      <h4>
        <a
          className='contributors'
          href='http://github.com/skang1004'
          target='_blank'>
          Saejin Kang
        </a>
      </h4>
      <h4>
        <a
          className='contributors'
          href='http://github.com/jonescamilla'
          target='_blank'>
          Jonathan Escamilla
        </a>
      </h4>
      <h4>
        <a
          className='contributors'
          href='http://github.com/SmithSean17'
          target='_blank'>
          Sean Smith
        </a>
      </h4>
    </div>
  );
}

export default Installation;
