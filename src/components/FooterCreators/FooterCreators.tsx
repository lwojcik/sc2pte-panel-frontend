import React from 'react';
import Creator from 'components/Creator/Creator';
import lukem from './images/lukem.png';
import grizzly from './images/grizzly.png';

const FooterCreators = () => (
  <div>
    <Creator
      role='Code'
      name='Lukem.net'
      href='https://www.lukem.net/'
      image={lukem}
    />
    <Creator
      role='Design'
      name='GrizzlyGaming'
      href='https://grizzlygaming.mx/'
      image={grizzly}
    />
  </div>
);

export default FooterCreators;
