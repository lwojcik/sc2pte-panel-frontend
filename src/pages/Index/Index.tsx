import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <ul>
    <li>
      <Link to='/viewer'>
        Viewer
      </Link>
    </li>
    <li>
      <Link to='/config'>
        Config
      </Link>
    </li>
    <li>
      <Link to='/sample'>
        SampleViewer
      </Link>
    </li>
    <li>
      <Link to='/sampleConfig'>
        SampleConfig
      </Link>
    </li>
  </ul>
);

export default Index;
