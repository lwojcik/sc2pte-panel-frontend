import React from 'react';
import domRender from 'utils/domRender';
import Row from './Row';

const testData = {
  children: <p>Test</p>,
};

it('renders correctly', () => {
  domRender(Row, testData);
});
