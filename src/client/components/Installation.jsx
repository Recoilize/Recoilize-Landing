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

      <p>Install the Recoilize npm module</p>
      <img src={install1} />
      <br />

      <p>Import RecoilizeDebugger from the module</p>
      <img src={install2} />
      <br />

      <p>
        Recoilize requires you to create a variable that grabs the HTML element
        where you inject your React application
      </p>
      <img src={install3} />
      <br />

      <p>
        You must import all your atoms and selectors and pass them into the
        Recoilize component as show above
      </p>
      <img src={install4} />
      <br />

      <p>Example:</p>
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
      <p>
        Bren Yamaguchi &nbsp;
        <a
          className='contributors'
          href='http://github.com/brenyama'
          target='_blank'>
          @github &nbsp;
        </a>
        <a
          className='contributors'
          href='http://linkedin.com/in/brenyamaguchi'
          target='_blank'>
          @linkedin
        </a>
      </p>
      <p>
        Saejin Kang &nbsp;
        <a
          className='contributors'
          href='http://github.com/skang1004'
          target='_blank'>
          @github &nbsp;
        </a>
        <a
          className='contributors'
          href='http://linkedin.com/in/saejinkang1004'
          target='_blank'>
          @linkedin
        </a>
      </p>
      <p>
        Jonathan Escamilla &nbsp;
        <a
          className='contributors'
          href='http://github.com/jonescamilla'
          target='_blank'>
          @github &nbsp;
        </a>
        <a
          className='contributors'
          href='https://www.linkedin.com/in/jon-escamilla/'
          target='_blank'>
          @linkedin
        </a>
      </p>
      <p>
        Sean Smith &nbsp;
        <a
          className='contributors'
          href='http://github.com/SmithSean17'
          target='_blank'>
          @github &nbsp;
        </a>
      </p>
    </div>
  );
}

export default Installation;
