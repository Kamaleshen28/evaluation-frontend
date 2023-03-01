import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '../card';

jest.mock('react-router-dom');

const mockEventData =
{
  'id': 1,
  'name': 'Battle of the Bands',
  'description': 'Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won\'t want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don\'t miss out on the most unforgettable rock competition of the year!',
  'venue': 'All Stars Arena, Las Vegas, NV, USA',
  'datetime': '2023-03-01T05:00:00.000Z',
  'timezone': 'America/Los_Angeles',
  'areSeatsAvailable': true,
  'isRegistered': true,
  'isBookmarked': true,
  'imgUrl': 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg'
};


describe('card', () => {
  it('should render card correctly', async () => {
    const { asFragment } = render(<Card {...mockEventData} />);
    await waitFor(() => {
      expect(screen.getAllByText('Battle of the Bands')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call naviagte to /1 when card is clicked', async () => {
    const navigateFn = jest.fn();
    useNavigate.mockReturnValue(navigateFn);
    render(<Card />);
    // await waitFor(() => {
    //   expect(screen.getAllByText('Battle of the Bands')).toBeTruthy();
    // });
    const clickableArea = screen.getByTestId('clickable-area');
    fireEvent.click(clickableArea);
    expect(navigateFn).toHaveBeenCalled();
  });
});



