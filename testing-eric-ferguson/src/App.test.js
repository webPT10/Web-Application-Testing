import React from 'react';
import App from './App';

import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup)

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
