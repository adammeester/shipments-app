import { Shipment } from "../types";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

type ShipmentsContainerProps = {
  shipments: Array<Shipment>;
};

export const ShipmentsContainer = ({ shipments }: ShipmentsContainerProps) => {
  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Tracking ID</Th>
          <Th>Status</Th>
          <Th>Status Severity</Th>
          <Th>Delivered Time</Th>
          <Th>Last Update</Th>
          <Th>Delivery Address</Th>
          <Th>Total Transit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {shipments.map((shipment) => (
          <Tr key={shipment.id}>
            <Td>{shipment.id}</Td>
            <Td>{shipment.trackingId}</Td>
            <Td>{shipment.status}</Td>
            <Td>{shipment.statusSeverity}</Td>
            <Td>{shipment.deliveredTime}</Td>
            <Td>{shipment.lastUpdate}</Td>
            <Td>{shipment.deliveryAddress}</Td>
            <Td>{shipment.totalTransit}</Td>
            <Td>
              <Button>View detail</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
