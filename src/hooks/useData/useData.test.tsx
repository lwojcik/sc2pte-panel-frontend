import React from 'react';
import { render } from '@testing-library/react';
import useData, { FetchMethod } from './useData';

const testParams = {
  url: 'http://testurl',
  method: 'GET' as FetchMethod,
}


jest.mock('src/helpers/fetchData/fetchData', () => {
  return jest.fn().mockImplementation(() => ({
    message: 'mocked test data',
  }));
});

jest.mock('swr', () => {
  return jest.fn().mockImplementation(() => ({
    useSWR: () => ({
      message: 'mocked test data',
    }),
  }));
});


const TestElement = () => {
  const { data } = useData(testParams) as { data: object };
  return (
    <div>TestElement {JSON.stringify(data)}</div>
  );
}

it('renders correctly', async () => {
  const { container } = render(<TestElement />);
  expect(container).toMatchSnapshot();
});
