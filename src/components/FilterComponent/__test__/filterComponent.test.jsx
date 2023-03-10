import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import FilterComponent from '../filterComponent';

jest.mock('react-router-dom');



describe('card', () => {
  it('should render filterComponent correctly', async () => {
    const { asFragment } = render(<FilterComponent />);
    await waitFor(() => {
      expect(screen.getAllByText('ALL')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});



