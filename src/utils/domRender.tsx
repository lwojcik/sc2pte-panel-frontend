import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

type TestElement = (props?: any) => ReactElement | null;

const domRender = (
  Element: TestElement,
  testData?: unknown,
  testChild?: any,
) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Element {...testData}>
      {testChild}
    </Element>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
};

export default domRender;
