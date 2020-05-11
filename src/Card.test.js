import React from 'react';
import renderer from 'react-test-renderer';
import Card from "./Card";
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Card" content="Data"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });