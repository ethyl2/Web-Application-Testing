import React from 'react';
import { render } from '@testing-library/react';
import App, { balls, reset } from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App displays count of balls', () => {
  const { getByText } = render(<App />);
  const ballsEl = getByText(/balls/i);
  expect(ballsEl).toBeInTheDocument();
  expect(ballsEl).toBeVisible();
})

test('App displays count of strikes', () => {
  const { getByText } = render(<App />);
  const strikesEl = getByText(/strikes/i);
  expect(strikesEl).toBeInTheDocument();
  expect(strikesEl).toBeVisible();
})

test('App contains strike button', () => {
  const { getByText } = render(<App />);
  const strikeButton = getByText(/^strike$/i);
  expect(strikeButton).toBeInTheDocument();
  expect(strikeButton).toBeVisible();
})

test('App contains ball button', () => {
  const { getByText } = render(<App />);
  const ballButton = getByText(/^ball$/i);
  expect(ballButton).toBeInTheDocument();
  expect(ballButton).toBeVisible();
})

test('App contains foul button', () => {
  const { getByText } = render(<App />);
  const foulButton = getByText(/^foul$/i);
  expect(foulButton).toBeInTheDocument();
  expect(foulButton).toBeVisible();
})

test('App contains hit button', () => {
  const { getByText } = render(<App />);
  const hitButton = getByText(/^hit$/i);
  expect(hitButton).toBeInTheDocument();
  expect(hitButton).toBeVisible();
})

/*
test('Reset sets balls to 0', () => {
  console.log(balls);
  //reset();
  const newNumBalls = balls;
  //expect(newNumBalls).toBe(0);
})
*/
