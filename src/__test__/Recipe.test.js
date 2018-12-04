import React from 'react';
import Recipe from '../cooking-view/Recipe.js';
import renderer from 'react-test-renderer';

it('renders nothing without given anything from planning-view', () => {
  const tree = renderer.create(
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
