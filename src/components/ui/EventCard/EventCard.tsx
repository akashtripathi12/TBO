import Link from 'next/link';
import { ROUTES } from '@/config';
import { EventCardProps } from './types';
import { EventCardHeader } from './EventCardHeader';
import { EventCardMetrics } from './EventCardMetrics';

import { useState } from 'react';
import { HeadGuestModal } from '../HeadGuestModal';

/**
 * EventCard component
 * Displays event summary with clickable link to event details
 * Composed of Header and Metrics subcomponents
 */
export function EventCard({ event, className }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAssignClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
    <Link href={ROUTES.EVENT(event.id)}>
      <div className={`card p-6 hover:shadow-md transition-all cursor-pointer group relative ${className || ''}`}>
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
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
            {(!event.headGuestId || event.headGuestId === '00000000-0000-0000-0000-000000000000') ? (
                <button 
                    onClick={handleAssignClick}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-md transition-colors"
                >
                    Assign Head Guest
                </button>
            ) : (
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-md">
                    Head Guest Assigned
                </span>
            )}
        </div>
      </div>
    </Link>

    <HeadGuestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        eventId={event.id} 
        eventName={event.name}
    />
    </>
  );
}
