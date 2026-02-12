import { memo } from 'react';
import { getInventoryRiskColor } from '@/modules/inventory/utils';
import { EventCardMetricsProps } from './types';

/**
 * EventCard Metrics subcomponent
 * Displays guest count, hotel count, and inventory consumption
 * Optimized with React.memo for performance
 */
export const EventCardMetrics = memo(function EventCardMetrics({
  guestCount,
  hotelCount,
  inventoryConsumed,
}: EventCardMetricsProps) {
  const inventoryColor = getInventoryRiskColor(inventoryConsumed);

  return (
    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
      <div>
        <p className="text-xs text-neutral-500 mb-1">Guests</p>
        <p className="text-lg font-semibold text-neutral-900">{guestCount}</p>
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-1">Hotels</p>
        <p className="text-lg font-semibold text-neutral-900">{hotelCount}</p>
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-1">Inventory</p>
        <p className={`text-lg font-semibold ${inventoryColor}`}>{inventoryConsumed}%</p>
      </div>
    </div>
  );
});
