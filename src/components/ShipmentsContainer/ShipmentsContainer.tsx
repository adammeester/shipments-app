import { ShipmentStatus } from '../ShipmentStatus';
import { Shipment } from '../types';
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
} from '@chakra-ui/react';
import { UpDownIcon } from '@chakra-ui/icons';

type ShipmentsContainerProps = {
  shipments: Array<Shipment>;
  handleSortShipments: (field: 'trackingId' | 'status') => void;
  handleViewShipment: (shipment: Shipment) => void;
};

const shipmentCell = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
});

export const ShipmentsContainer = ({
  shipments,
  handleSortShipments,
  handleViewShipment,
}: ShipmentsContainerProps) => {
  return (
    <TableContainer borderRadius={'0.75rem'} background='white'>
      <Table variant={'simple'} columnGap={'1rem'}>
        <Thead>
          <Tr sx={{ cursor: 'pointer' }}>
            <Th width='20%'>
              <Box
                css={shipmentCell}
                onClick={() => handleSortShipments('trackingId')}
              >
                Shipment
                <UpDownIcon />
              </Box>
            </Th>
            <Th>
              <Box
                sx={{ cursor: 'pointer' }}
                css={shipmentCell}
                onClick={() => handleSortShipments('status')}
              >
                Status
                <UpDownIcon />
              </Box>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {shipments.map((shipment) => (
            <>
              <Tr
                sx={{ cursor: 'pointer' }}
                key={shipment.id}
                onClick={() => handleViewShipment(shipment)}
              >
                <Td>{shipment.trackingId}</Td>
                <Td>
                  <ShipmentStatus status={shipment.status} />
                </Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
