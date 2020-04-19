/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Accomplishments from '../Accomplishments';

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

it('Accomplishments component renders successfully', () => {
  act(() => {
    render(<Accomplishments />, container);
  });
  const headerH2 = container.getElementsByTagName('h2')[0];
  expect(headerH2.textContent).toBe('Accomplishments');
  const headerH4 = container.getElementsByTagName('h4');
  expect(headerH4[0].textContent).toBe('Languages');
  expect(headerH4[1].textContent).toBe('Projects');
  const headerH5 = container.getElementsByTagName('h5');
  expect(headerH5[0].textContent).toBe('English');
  expect(headerH5[1].textContent).toBe('Hindi');
  expect(headerH5[2].textContent).toBe('French');
  expect(headerH5[3].textContent).toBe(
    'Understanding and analyzing semantic knowledge using expert system',
  );
  expect(headerH5[4].textContent).toBe('Mobile Doctor');
  expect(headerH5[5].textContent).toBe('Expense Tracker App');
  expect(headerH5[6].textContent).toBe('Expense Tracker');
  expect(headerH5[7].textContent).toBe('Aadhar Card Enhancement System');
  const paragraphs = container.getElementsByTagName('p');
  expect(paragraphs[0].textContent).toBe('Professional working proficiency');
  expect(paragraphs[1].textContent).toBe('Native or bilingual proficiency');
  expect(paragraphs[2].textContent).toBe('Limited working proficiency');
  expect(paragraphs[3].textContent).toBe('Jan 2019 – May 2019');
  expect(paragraphs[4].textContent).toBe(
    'Subjective answer automatic evaluation system using text mining approach'
      + ' by extracting high level information from text and using it to evaluate'
      + ' answers and allocate marks accordingly. Implemented using python nltk'
      + ' libraries.',
  );
  expect(paragraphs[5].textContent).toBe('Feb 2018');
  expect(paragraphs[6].textContent).toBe(
    'An android app which suggest home remedy based on symptoms selected by'
      + ' user. Used excel sheet as data-set and integrated successfully.',
  );
  expect(paragraphs[7].textContent).toBe('Oct 2017');
  expect(paragraphs[8].textContent).toBe(
    'An android app on Expense Tracker based on machine learning concept to'
      + ' predict future income and expenses and it’s also gives ideas about in'
      + ' which field we can earn more and how we can decrease our expenses.'
      + ' Implemented linear regression approach.',
  );
  expect(paragraphs[9].textContent).toBe('Jun 2017 – Jul 2017');
  expect(paragraphs[10].textContent).toBe(
    'Project is based on a website for Expense Tracker using JAVAScript, HTML,'
      + ' CSS, AngularJS as front-end and JAVA, Servlet and JDBC as back-end. JSON'
      + ' was used to connect front-end and back-end. Successfully deployed on IBM'
      + ' Bluemix with ClearDB database.',
  );
  expect(paragraphs[11].textContent).toBe('May 2017');
  expect(paragraphs[12].textContent).toBe(
    'The project is to make an enhancement in current AADHAAR – CARD System by'
      + ' adding one more field in the bio-metrics i.e. DNA. Java, JDBC and Oracle'
      + ' Database is used for this project',
  );
});
