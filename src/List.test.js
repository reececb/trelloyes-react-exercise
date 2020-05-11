import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List title="List" content="Data"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });