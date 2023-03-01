import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Footer from '../footer';


jest.mock('react-router-dom');


describe('card', () => {
  it('should render header correctly', async () => {
    const { asFragment } = render(<Footer />);
    await waitFor(() => {
      expect(screen.getAllByText('THEMES')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});



