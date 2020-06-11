import React from 'react';
import domRender from 'utils/domRender';
import HoverableScrollArea from './HoverableScrollArea';

const testData = {
  className: 'test',
};

const testChild = (
  <p>Test</p>
);

it('renders correctly', () => {
  domRender(HoverableScrollArea, testData, testChild);
});
