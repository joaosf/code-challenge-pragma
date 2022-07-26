import { render, screen } from '@testing-library/react';
import App from './App';

import React, { useState as useStateMock } from 'react';

const itemsMock = [
  {
    id: '1',
    name: 'Pilsner',
    temperature: 5,
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    temperature: 7,
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

describe('<App />', () => {
  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => useStateMock(itemsMock));
  });

  it('renders without errors', () => {
    render(<App />);
    const header = screen.getByText(/^Beers$/i);
    expect(header).toBeInTheDocument();
  });

  it('renders table data without errors', () => {
    render(<App />);
    const tableTxt = screen.getByText(/^Pilsner$/i);
    expect(tableTxt).toBeInTheDocument();
    const temperature = screen.getByText(/^5$/i);
    expect(temperature).toBeInTheDocument();
    const status = screen.getByText(/^all good$/i);
    expect(status).toBeInTheDocument();
  });
});
