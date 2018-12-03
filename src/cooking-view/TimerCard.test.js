import React from 'react';
import TimerCard from './TimerCard.js';
import renderer from 'react-test-renderer';

test('Card is produced', () => {
  const component = renderer.create(
    <section className="timer-card">
      <p>{this.state.description}</p>
      <p>{this.state.whenOClock}</p>
      <br />
    </section>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
