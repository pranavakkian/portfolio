/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Foot from '../Foot';

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

it('Foot component renders successfully', () => {
  act(() => {
    render(<Foot />, container);
  });
  const items = container.getElementsByClassName('item');
  expect(items[0].textContent).toBe('Pranav Gupta 2020');
});
