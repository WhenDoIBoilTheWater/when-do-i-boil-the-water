import React from 'react';
import TimerCard from '../cooking-view/TimerCard.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <TimerCard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
