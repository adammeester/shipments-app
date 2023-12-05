export type Shipment = {
  id: string; // UUIDv4
  trackingId: string;
  status: 'Delivered' | 'In-Transit' | 'Manifested' | 'Unknown';
  statusSeverity: 'Success' | 'Info' | 'Warning';
  deliveredTime: string; // ISO date
  lastUpdate: string; // ISO date
  deliveryAddress: string;
  totalTransit: string; // x days | x hours
};
