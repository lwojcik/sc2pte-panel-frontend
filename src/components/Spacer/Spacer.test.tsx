import React from 'react';
import domRender from 'src/testUtils/domRender';
import Spacer from './Spacer';

const testData = {
  children: <p>Test</p>,
};

it('renders correctly', () => {
  domRender(Spacer, testData);
});
