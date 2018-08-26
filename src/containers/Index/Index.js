import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <ul>
    <li>
      <Link to="/viewer.html">
        viewer.html
      </Link>
    </li>
    <li>
      <Link to="/config.html">
        config.html
      </Link>
    </li>
  </ul>
);

export default Index;
