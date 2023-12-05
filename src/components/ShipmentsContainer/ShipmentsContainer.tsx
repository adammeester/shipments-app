import { ShipmentStatus } from "../ShipmentStatus";
import { Shipment } from "../types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  css,
  Box,
  TableContainer,
} from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

type ShipmentsContainerProps = {
  shipments: Array<Shipment>;
};

enum SortOrder {
  Unsorted = "unsorted",
  Ascending = "asc",
  Descending = "desc",
}

const shipmentCell = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
});

const sortShipments = () => {};

export const ShipmentsContainer = ({ shipments }: ShipmentsContainerProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Unsorted);

  const sortShipments = () => {
    switch (sortOrder) {
      case SortOrder.Unsorted:
        setSortOrder(SortOrder.Ascending);
        break;
      case SortOrder.Ascending:
        setSortOrder(SortOrder.Descending);
        break;
      case SortOrder.Descending:
        setSortOrder(SortOrder.Unsorted);
        break;
    }
  };
  //TODO: change upDownIcon based on sort order

  return (
    <TableContainer borderRadius={"0.75rem"} background="white">
      <Table variant={"simple"} columnGap={"1rem"}>
        <Thead>
          <Tr>
            <Th width="20%">
              <Box css={shipmentCell} onClick={sortShipments}>
                Shipment
                <UpDownIcon />
              </Box>
            </Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedShipments.map((shipment) => (
            <Tr key={shipment.id}>
              <Td>{shipment.trackingId}</Td>
              <Td>
                <ShipmentStatus status={shipment.status} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
