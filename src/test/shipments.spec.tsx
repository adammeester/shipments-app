import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Shipments } from '../components/Shipments';
import { GET_SHIPMENTS } from '../queries/getShipments';
import '@testing-library/jest-dom';

const mockData = {
  shipments: [
    {
      id: '1',
      trackingId: 'ABC123',
      status: 'Shipped',
    },
    {
      id: '2',
      trackingId: 'XYZ789',
      status: 'Delivered',
    },
  ],
};

const mocks = [
  {
    request: {
      query: GET_SHIPMENTS,
    },
    result: {
      data: {
        shipments: mockData.shipments,
      },
    },
  },
];

describe('Shipments Component', () => {
  it('renders loading message while data is loading', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Shipments />
      </MockedProvider>
    );
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });

  it('renders shipments', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Shipments />
      </MockedProvider>
    );

    expect(await screen.getByText('ABC123')).toBeInTheDocument();
    expect(await screen.getByText('XYZ789')).toBeInTheDocument();
  });
});
