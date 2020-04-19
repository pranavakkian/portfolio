/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Experience from '../Experience';

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

it('Experience component renders successfully', () => {
  act(() => {
    render(<Experience />, container);
  });
  const headerH2 = container.getElementsByTagName('h2')[0];
  expect(headerH2.textContent).toBe('Experience');
  const headerH4 = container.getElementsByTagName('h4');
  expect(headerH4[0].textContent).toBe('Assistant System Engineer - Trainee');
  expect(headerH4[1].textContent).toBe('Intern');
  const paragraphs = container.getElementsByTagName('p');
  expect(paragraphs[0].textContent).toBe(
    'Tata Consultancy Services | Full-time',
  );
  expect(paragraphs[1].textContent).toBe(
    'Apr 2019 - presentBengalure, Karnataka, India',
  );
  expect(paragraphs[2].textContent).toBe(
    'Working as a full stack developer for a major UK retailer and e-commerce company.',
  );
  expect(paragraphs[3].textContent).toBe('Biztime IT Solutions Pvt. Ltd');
  expect(paragraphs[4].textContent).toBe(
    'Jun 2017 - Jul 2017 | 2 mosBengalure, Karnataka, India',
  );
  expect(paragraphs[5].textContent).toBe(
    'Worked on the back end of web development with JAVA Script, Clear DB, Servlet, JSON, JAVA, JDBC and IBM Bluemix.',
  );
});
