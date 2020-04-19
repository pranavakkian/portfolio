/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NavBar from '../NavBar';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Callback function called successfully', () => {
  const onClick = jest.fn();
  act(() => {
    render(<NavBar callback={onClick} />, container);
  });
  const header = container.getElementsByTagName('h1')[0];
  expect(header.textContent).toBe(' Pranav Gupta');
  const items = container.getElementsByClassName('item');
  expect(items[1].textContent).toBe('About');
  expect(items[2].textContent).toBe('Experience');
  expect(items[3].textContent).toBe('Education');
  expect(items[4].textContent).toBe('Skills');
  expect(items[5].textContent).toBe('Accomplishments');
});
