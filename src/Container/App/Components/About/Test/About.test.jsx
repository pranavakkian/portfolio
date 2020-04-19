/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import About from '../About';

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

it('About component renders successfully', () => {
  act(() => {
    render(<About />, container);
  });
  const header = container.getElementsByTagName('h2')[0];
  expect(header.textContent).toBe('About');
  const paragraphs = container.getElementsByTagName('p');
  expect(paragraphs[0].textContent).toBe(
    'I am a talented, skilled and knowledgeable '
      + 'computer science student with extensive knowledge of programming and computer '
      + 'applications. Looking for great opportunities in full-stack development, machine learning, etc.',
  );
  expect(paragraphs[1].textContent).toBe(
    'Furthermore, I am adept at handling multiple tasks competently and at working well under pressure.',
  );
  expect(paragraphs[2].textContent).toBe(
    'My key strength is communication, building strong relationships with people to deliver the best '
      + 'results. I am an effective and articulate communicator with all levels of employees.'
      + ' I instill confidence in others and approach new challenges with an open mind.',
  );
  expect(paragraphs[3].textContent).toBe(
    'I like traveling and my hobbies include cooking, fitness, movies, swimming, and clubbing.',
  );
});
