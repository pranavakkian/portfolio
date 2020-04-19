/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Education from '../Education';

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

it('Education component renders successgully', () => {
  act(() => {
    render(<Education />, container);
  });
  const headerH2 = container.getElementsByTagName('h2')[0];
  expect(headerH2.textContent).toBe('Education');
  const headerH4 = container.getElementsByTagName('h4');
  expect(headerH4[0].textContent).toBe('SRM University');
  expect(headerH4[1].textContent).toBe('Camford Public School, Patna');
  expect(headerH4[2].textContent).toBe('Red Rose School, Deoghar');
  const paragraphs = container.getElementsByTagName('p');
  expect(paragraphs[0].textContent).toBe(
    'Bachelor of Technology - B.Tech, Computer Science, 77.16%',
  );
  expect(paragraphs[1].textContent).toBe('2015 - 2019');
  expect(paragraphs[2].textContent).toBe('12th (PCM), 67.2%');
  expect(paragraphs[3].textContent).toBe('2014 - 2015');
  expect(paragraphs[4].textContent).toBe('10th, 8.4');
  expect(paragraphs[5].textContent).toBe('2012 - 2013');
});
