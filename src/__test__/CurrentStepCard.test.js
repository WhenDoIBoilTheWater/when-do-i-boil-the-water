import React from 'react';
import CurrentStepCard from '../cooking-view/CurrentStepCard.js';
import renderer from 'react-test-renderer';

it('renders NOTHING', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
