import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Header from '../header';
import { useNavigate } from 'react-router-dom';


jest.mock('react-router-dom');


describe('card', () => {
  it('should render header correctly', async () => {
    const { asFragment } = render(<Header />);
    await waitFor(() => {
      expect(screen.getAllByText('EVENTIFY')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
  it('should call naviagte with / when EVENTIFY is clicked', async () => {
    const navigateFn = jest.fn();
    useNavigate.mockReturnValue(navigateFn);
    render(<Header />);
    const Evenity = screen.getByTestId('evenity-text');
    fireEvent.click(Evenity);
    expect(navigateFn).toBeCalledWith('/');
  });
});



