import React from 'react';
import domRender from 'src/testUtils/domRender';
import Row from './Row';

const testData = {
  children: <p>Test</p>,
};

it('renders correctly', () => {
  domRender(Row, testData);
});
