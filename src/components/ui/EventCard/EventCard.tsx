import Link from 'next/link';
import { ROUTES } from '@/config';
import { EventCardProps } from './types';
import { EventCardHeader } from './EventCardHeader';
import { EventCardMetrics } from './EventCardMetrics';

/**
 * EventCard component
 * Displays event summary with clickable link to event details
 * Composed of Header and Metrics subcomponents
 */
export function EventCard({ event, className }: EventCardProps) {
  return (
    <Link href={ROUTES.EVENT(event.id)}>
      <div className={`card p-6 hover:shadow-md transition-all cursor-pointer group ${className || ''}`}>
        <EventCardHeader
          name={event.name}
          location={event.location}
          startDate={event.startDate}
          endDate={event.endDate}
          status={event.status}
        />
        <EventCardMetrics
          guestCount={event.guestCount}
          hotelCount={event.hotelCount}
          inventoryConsumed={event.inventoryConsumed}
        />
      </div>
    </Link>
  );
}
