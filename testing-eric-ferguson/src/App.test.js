import React from 'react';
import App from './App';

import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup)

it('renders without crashing!', () => {
  const simulatedDOM = rtl.render(<App />);
})

it('All Buttons Exist', () => {
  const simulatedDOM = rtl.render(<App />)

  const ballButton = document.querySelector('div.buttons button.ball');
  expect(ballButton).toBeInTheDocument();

  const strikeButton = document.querySelector('div.buttons button.strike');
  expect(strikeButton).toBeInTheDocument();

  const foulButton = document.querySelector('div.buttons button.foul');
  expect(foulButton).toBeInTheDocument();

  const hitButton = document.querySelector('div.buttons button.hit');
  expect(hitButton).toBeInTheDocument();
})

it('Count displayed on each Button', () => {
  const simulatedDOM = rtl.render(<App />);

  const ballCount = document.querySelector('div.counts p.ball');
  expect(ballCount).toBeInTheDocument();

  const strikeCount = document.querySelector('div.counts p.ball');
  expect(strikeCount).toBeInTheDocument();

  const foulCount = document.querySelector('div.counts p.foul');
  expect(foulCount).toBeInTheDocument();

  const hitCount = document.querySelector('div.counts p.hit');
  expect(hitCount).toBeInTheDocument()
})
