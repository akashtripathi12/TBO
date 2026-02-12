import { memo } from 'react';
import { Badge } from '../Badge';
import { formatDateRange } from '@/utils';
import { EventCardHeaderProps } from './types';

/**
 * EventCard Header subcomponent
 * Displays event title, location, dates, and status badge
 */
export const EventCardHeader = memo(function EventCardHeader({
  name,
  location,
  startDate,
  endDate,
  status,
}: EventCardHeaderProps) {
  const statusVariantMap = {
    active: 'active' as const,
    upcoming: 'upcoming' as const,
    completed: 'completed' as const,
  };

  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-corporate-blue-100 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 mt-1">
          {location} | {formatDateRange(startDate, endDate)}
        </p>
      </div>
      <Badge 
        variant={statusVariantMap[status]} 
        label={status.charAt(0).toUpperCase() + status.slice(1)}
      />
    </div>
  );
});
