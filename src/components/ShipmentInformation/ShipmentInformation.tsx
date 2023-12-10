import { Box, Table, Td, Tr, css } from '@chakra-ui/react';
import { ShipmentStatusType } from '../types';
import { ShipmentStatus } from '../ShipmentStatus';
import { formatDate } from '../../utils/formatDate';

type ShipmentInformationProps = {
  status: ShipmentStatusType;
  deliveredTime: string;
  deliveryAddress: string;
  lastUpdate: string;
  totalTransit: string;
};

const labelCell = css({
  fontSize: '0.875rem',
  color: 'grey',
  padding: 0,
});

const valueCell = css({
  fontSize: '0.875rem',
  fontWeight: 500,
});

export const ShipmentInformation = ({
  status,
  deliveredTime,
  deliveryAddress,
  lastUpdate,
  totalTransit,
}: ShipmentInformationProps) => {
  return (
    <Box sx={{ marginY: '1rem' }}>
      <Box fontWeight='500' color='grey' fontSize={'0.875rem'}>
        SHIPMENT
      </Box>
      <Table padding={'0'}>
        <Tr>
          <Td css={labelCell}>Status</Td>
          <Td>
            <ShipmentStatus status={status} size='sm' />
          </Td>
        </Tr>
        <Tr>
          <Td css={labelCell}>Delivered time</Td>
          <Td css={valueCell}>{formatDate(deliveredTime) || 'N/A'}</Td>
        </Tr>
        <Tr>
          <Td css={labelCell}>Delivery address</Td>
          <Td css={valueCell}>{deliveryAddress}</Td>
        </Tr>
        <Tr>
          <Td css={labelCell}>Last updated</Td>
          <Td css={valueCell}>{formatDate(lastUpdate)}</Td>
        </Tr>
        <Tr>
          <Td css={labelCell}>Total transit time</Td>
          <Td css={valueCell}>{totalTransit}</Td>
        </Tr>
      </Table>
    </Box>
  );
};
