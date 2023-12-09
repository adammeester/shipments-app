export type Shipment = {
  id: string; // UUIDv4
  trackingId: string;
  status: ShipmentStatusType;
  statusSeverity: 'Success' | 'Info' | 'Warning';
  deliveredTime: string; // ISO date
  lastUpdate: string; // ISO date
  deliveryAddress: string;
  totalTransit: string; // x days | x hours
  history?: Array<TrackingHistoryType>;
};

export type ShipmentStatusType =
  | 'Delivered'
  | 'In-Transit'
  | 'Manifested'
  | 'Unknown';

export type TrackingHistoryStatus =
  | 'In transit'
  | 'Unknown scan'
  | 'Return to sender';

export type TrackingHistoryType = {
  location: string;
  status: TrackingHistoryStatus;
  timestamp: string;
};
