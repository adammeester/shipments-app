export type Shipment = {
  id: string; // UUIDv4
  trackingId: string;
  status: ShipmentStatusType;
  statusSeverity: StatusSeverity;
  deliveredTime: string; // ISO date
  lastUpdate: string; // ISO date
  deliveryAddress: string;
  totalTransit: string; // x days | x hours
};

export type StatusSeverity = 'Success' | 'Info' | 'Warning';

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
  id: string;
  trackingId: string;
  statusSeverity: StatusSeverity;
  location: string;
  status: TrackingHistoryStatus;
  timestamp: string;
};
