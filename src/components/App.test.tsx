import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup, customRender } from '../test-utils';
import App from './App';

describe('App Layout testing', () => {
  let mobxStore: {};
  let rendered = {};

  beforeEach(() => {
    mobxStore = {};
    rendered = customRender(<App />, { mobxStore });
  });

  afterEach(cleanup);

  it('renders without crashing', () => {
    customRender(<App />, { mobxStore });
  });

  it('renders correctly', () => {
    expect(rendered).toMatchSnapshot();
  });
});
