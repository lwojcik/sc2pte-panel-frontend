import React from 'react';

import './Legend.css';

const Legend = () => (
  <div className="Legend">
    <span className="Legend--win">
      Win
    </span>
    {/* <span className="Legend--draw">
      Draw
    </span> */}
    <span className="Legend--loss">
      Loss
    </span>
  </div>
);

export default Legend;
