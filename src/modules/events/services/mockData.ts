import { Event } from '../types';

/**
 * Mock event data for development
 * In production, this will be replaced with API calls
 */
export const mockEvents: Event[] = [
    {
        id: '1',
        name: 'Ananya & Rahul Wedding',
        location: 'Jaipur',
        startDate: '2026-02-12',
        endDate: '2026-02-14',
        organizer: 'Ananya Sharma',
        guestCount: 240,
        hotelCount: 5,
        inventoryConsumed: 82,
        status: 'active',
    },
    {
        id: '2',
        name: 'Tech Summit 2026',
        location: 'Bangalore',
        startDate: '2026-03-20',
        endDate: '2026-03-22',
        organizer: 'TechCorp Events',
        guestCount: 450,
        hotelCount: 3,
        inventoryConsumed: 65,
        status: 'upcoming',
    },
    {
        id: '3',
        name: 'Annual Sales Conference',
        location: 'Mumbai',
        startDate: '2026-04-15',
        endDate: '2026-04-17',
        organizer: 'Global Sales Inc',
        guestCount: 180,
        hotelCount: 2,
        inventoryConsumed: 90,
        status: 'active',
    },
];
