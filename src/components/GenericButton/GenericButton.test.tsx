import React from 'react';
import ReactDOM from 'react-dom';
import GenericButton from './GenericButton';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericButton onClick={() => null} className='testClassName'>test</GenericButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});
