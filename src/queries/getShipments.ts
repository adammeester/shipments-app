import { gql } from "@apollo/client";

export const GET_SHIPMENTS = gql`
  query {
    shipments {
      id
      trackingId
      status
      statusSeverity
      deliveredTime
      lastUpdate
      deliveryAddress
      totalTransit
    }
  }
`;
