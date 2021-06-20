/* eslint-disable import/no-extraneous-dependencies */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

import 'jest-axe/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

afterAll(() => {
  global.window = window;
});

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

configure({ adapter: new Adapter() });
