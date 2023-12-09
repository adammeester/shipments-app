import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  css,
} from '@chakra-ui/react';
import { Shipment } from '../types';
import { CloseIcon } from '@chakra-ui/icons';
import { ShipmentInformation } from '../ShipmentInformation';
import { TrackingHistory } from '../TrackingHistory';

type ShipmentDetailProps = {
  shipment: Shipment;
  isOpen: boolean;
  onClose: () => void;
};

const closeButton = css({
  backgroundColor: 'white',
  border: '1px solid lightgrey',
});

const header = css({
  fontWeight: '600',
  fontSize: '1.5rem',
  borderBottomWidth: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ShipmentDetail = ({
  shipment,
  isOpen,
  onClose,
}: ShipmentDetailProps) => {
  return (
    <Drawer isOpen={isOpen} size='md' placement='right' onClose={onClose}>
      <DrawerContent>
        <DrawerHeader css={header}>
          {shipment?.trackingId}
          <Button size={'sm'} onClick={onClose} css={closeButton}>
            <CloseIcon fontSize={'0.5rem'} />
          </Button>
        </DrawerHeader>
        <DrawerBody>
          <ShipmentInformation {...shipment} />
          <TrackingHistory history={shipment.history} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
