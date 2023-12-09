import { Text, Card, CardBody, useColorModeValue } from '@chakra-ui/react';
import { ShipmentStatusType } from '../types';

type ShipmentStatusProps = {
  status: ShipmentStatusType;
  size?: 'default' | 'sm';
};
const colorMapping = {
  Delivered: 'green',
  'In-Transit': 'orange',
  Manifested: 'blue',
  Unknown: 'gray',
};

export const ShipmentStatus = ({
  status,
  size = 'default',
}: ShipmentStatusProps) => {
  const color = useColorModeValue(
    colorMapping[status],
    `${colorMapping[status]}.dark`
  );
  const borderColor = useColorModeValue(
    colorMapping[status],
    `${colorMapping[status]}.dark`
  );

  const paddingValue = {
    default: '0.5rem',
    sm: '0.2rem',
  };

  return (
    <Card color={color} border={`1px solid ${borderColor}`} maxWidth={'6rem'}>
      <CardBody
        display={'flex'}
        justifyContent={'center'}
        padding={paddingValue[size]}
      >
        <Text fontWeight={500} fontSize={'0.875rem'}>
          {status}
        </Text>
      </CardBody>
    </Card>
  );
};
