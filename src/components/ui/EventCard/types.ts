import { ReactNode } from 'react';
import { Event } from '@/modules/events/types';

export interface EventCardProps {
    event: Event;
    className?: string;
}

export interface EventCardHeaderProps {
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    status: Event['status'];
}

export interface EventCardMetricsProps {
    guestCount: number;
    hotelCount: number;
    inventoryConsumed: number;
}
