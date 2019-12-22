import React from 'react';
import domRender from 'src/testUtils/domRender';
import PortraitFrame from './PortraitFrame';

const testData = {
  rank: 'silver',
};

const testChild = (
  <p>TestElement</p>
);

it('renders correctly', () => {
  domRender(PortraitFrame, testData, testChild);
});
