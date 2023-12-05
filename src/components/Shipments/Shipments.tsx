import { apolloClient } from "../../api/apolloClient";
import { useQuery } from "@apollo/client";
import { GET_SHIPMENTS } from "../../queries/getShipments";
import { ShipmentsContainer } from "../ShipmentsContainer";
import { Shipment } from "../types";

export const Shipments = () => {
  const { loading, error, data } = useQuery(GET_SHIPMENTS, {
    client: apolloClient,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return <ShipmentsContainer shipments={data.shipments as Array<Shipment>} />;
};
