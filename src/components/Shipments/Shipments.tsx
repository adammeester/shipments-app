import { apolloClient } from '../../api/apolloClient';
import { useQuery } from '@apollo/client';
import { GET_SHIPMENTS } from '../../queries/getShipments';
import { ShipmentsContainer } from '../ShipmentsContainer';
import { Shipment } from '../types';
import { Box, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { ShipmentDetail } from '../ShipmentDetail';

enum SortOrder {
  Unsorted = 'unsorted',
  Ascending = 'asc',
  Descending = 'desc',
}

export const Shipments = () => {
  const { loading, error, data } = useQuery(GET_SHIPMENTS, {
    client: apolloClient,
    onCompleted: (result) => {
      if (result && result.shipments) {
        setSortedShipments([...result.shipments]);
      }
    },
  });
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Unsorted);
  const [sortedShipments, setSortedShipments] = useState<
    Array<Shipment> | undefined
  >(data?.shipments ? [...data.shipments] : undefined);
  const [selectedShipment, setSelectedShipment] = useState<
    Shipment | undefined
  >();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelectShipment = (shipment: Shipment) => {
    setSelectedShipment(shipment);
    onOpen();
  };

  const handleSortShipments = (field: 'trackingId' | 'status') => {
    switch (sortOrder) {
      case SortOrder.Unsorted:
        setSortedShipments(
          sortedShipments?.sort((a, b) => a[field].localeCompare(b[field]))
        );
        setSortOrder(SortOrder.Ascending);
        break;
      case SortOrder.Ascending:
        setSortedShipments(
          sortedShipments?.sort((a, b) => b[field].localeCompare(a[field]))
        );
        setSortOrder(SortOrder.Descending);
        break;
      case SortOrder.Descending:
        setSortedShipments([...data.shipments]);
        setSortOrder(SortOrder.Unsorted);
        break;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.shipments || !sortedShipments)
    return <p>No shipments to display</p>;

  return (
    <Box sx={{ textAlign: 'left' }} width='100%'>
      <ShipmentsContainer
        shipments={sortedShipments}
        handleSortShipments={handleSortShipments}
        handleViewShipment={handleSelectShipment}
      />
      {selectedShipment && (
        <ShipmentDetail
          shipment={selectedShipment}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
};
