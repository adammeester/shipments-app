import { Box } from '@chakra-ui/react';
import { TrackingHistoryType } from '../types';

type TrackingHistoryProps = {
  history?: Array<TrackingHistoryType>;
};

export const TrackingHistory = ({ history }: TrackingHistoryProps) => {
  return (
    <Box fontWeight='500' fontSize={'0.875rem'} color='grey'>
      TRACKING HISTORY
    </Box>
  );
};
