import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import BodyContent from '../bodyContent';
import axios from 'axios';

jest.mock('react-router-dom');

const mockEventData =
{
  data: [{
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
  }]
};


describe('card', () => {
  it('should render filterComponent correctly', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(mockEventData);
    const { asFragment } = render(<BodyContent />);
    await waitFor(() => {
      expect(screen.getAllByText('All Stars Arena, Las Vegas, NV, USA')).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});



