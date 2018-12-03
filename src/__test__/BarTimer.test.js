import React from 'react';
import BarTimer from '../cooking-view/BarTimer.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BarTimer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
