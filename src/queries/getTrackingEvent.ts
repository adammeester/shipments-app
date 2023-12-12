import { gql } from '@apollo/client';

export const GET_TRACKING_EVENTS = gql`
  query {
    trackingEvents {
      id
      trackingId
      status
      statusSeverity
      timestamp
      location
    }
  }
`;
