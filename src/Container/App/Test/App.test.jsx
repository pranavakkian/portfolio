/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

it('All components in App renders successfully', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeDefined();
});
