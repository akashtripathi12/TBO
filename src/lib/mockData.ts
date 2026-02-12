/**
 * Mock data exports
 * Temporary file for backward compatibility
 * In production, this will be replaced with API calls
 */

// Re-export from domain modules
export { mockEvents } from '@/modules/events/services/mockData';
export { mockMetrics, type MetricData } from '@/modules/dashboard/services/mockData';

// Mock data that needs to be moved to appropriate modules
import { HeadGuest, SubGuest } from '@/modules/events/types';
import { RoomAllocation, RoomGroup, CuratedVenue } from '@/types';

export const mockHeadGuests: HeadGuest[] = [
    {
        id: 'hg-123',
        name: 'Rajesh Sharma',
        email: 'rajesh.sharma@example.com',
        phone: '+91 98765 43210',
        eventId: '1',
        subGroupName: "Bride's Family",
    },
    {
        id: 'hg-124',
        name: 'Priya Verma',
        email: 'priya.verma@example.com',
        phone: '+91 98765 43211',
        eventId: '1',
        subGroupName: "Groom's Family",
    },
];

export const mockSubGuests: SubGuest[] = [
    { id: 'sg-1', name: 'Amit Sharma', email: 'amit@example.com', headGuestId: 'hg-123', roomGroupId: 'rg-1', guestCount: 1, age: 34 },
    { id: 'sg-2', name: 'Neha Sharma', email: 'neha@example.com', headGuestId: 'hg-123', roomGroupId: 'rg-1', guestCount: 1, age: 32 },
    { id: 'sg-3', name: 'Vikram Sharma', email: 'vikram@example.com', headGuestId: 'hg-123', roomGroupId: 'rg-2', guestCount: 1, age: 28 },
    { id: 'sg-4', name: 'Sonia Sharma', headGuestId: 'hg-123', roomGroupId: 'rg-2', guestCount: 1, age: 26 },
    { id: 'sg-5', name: 'Rahul Sharma (Family)', headGuestId: 'hg-123', guestCount: 3, age: 40 },
    { id: 'sg-6', name: 'Kavita Sharma', headGuestId: 'hg-123', guestCount: 1, age: 60 },
    { id: 'sg-7', name: 'Arjun Sharma', headGuestId: 'hg-123', guestCount: 1, age: 62 },
];

export const mockRoomAllocations: RoomAllocation[] = [
    {
        id: 'ra-1',
        eventId: '1',
        headGuestId: 'hg-123',
        roomType: 'Deluxe Room',
        maxCapacity: 2,
        hotelName: 'The Grand Palace',
    },
    {
        id: 'ra-2',
        eventId: '1',
        headGuestId: 'hg-123',
        roomType: 'Deluxe Room',
        maxCapacity: 2,
        hotelName: 'The Grand Palace',
    },
    {
        id: 'ra-3',
        eventId: '1',
        headGuestId: 'hg-123',
        roomType: 'Suite',
        maxCapacity: 4,
        hotelName: 'The Grand Palace',
    },
    {
        id: 'ra-4',
        eventId: '1',
        headGuestId: 'hg-123',
        roomType: 'Premium Room',
        maxCapacity: 3,
        hotelName: 'Royal Heritage',
    },
    {
        id: 'ra-5',
        eventId: '1',
        headGuestId: 'hg-123',
        roomType: 'Premium Room',
        maxCapacity: 3,
        hotelName: 'Royal Heritage',
    },
];

export const mockRoomGroups: RoomGroup[] = [
    {
        id: 'rg-1',
        allocationId: 'ra-1',
        guestIds: ['sg-1', 'sg-2'],
        customLabel: 'Parents Room',
    },
    {
        id: 'rg-2',
        allocationId: 'ra-2',
        guestIds: ['sg-3', 'sg-4'],
        customLabel: 'Siblings Room',
    },
];

export const mockCuratedVenues: CuratedVenue[] = [
    {
        id: 'cv-1',
        name: 'The Grand Palace',
        location: 'Jaipur, Rajasthan',
        description: 'A luxurious heritage hotel with stunning Rajasthani architecture, perfect for royal weddings and grand celebrations.',
        images: ['/hotel-grand-palace.png'],
        amenities: ['Swimming Pool', 'Spa & Wellness', 'Banquet Hall', 'Multi-Cuisine Restaurant', 'Valet Parking', 'Free WiFi'],
        eventId: '1',
    },
    {
        id: 'cv-2',
        name: 'Royal Heritage',
        location: 'Jaipur, Rajasthan',
        description: 'Experience the grandeur of Rajputana hospitality in this magnificent palace hotel with world-class amenities.',
        images: ['/hotel-royal-heritage.png'],
        amenities: ['Rooftop Restaurant', 'Gym', 'Conference Rooms', 'Garden Lawn', 'Airport Shuttle', 'Concierge Service'],
        eventId: '1',
    },
    {
        id: 'cv-3',
        name: 'Lakeside Retreat',
        location: 'Jaipur, Rajasthan',
        description: 'A serene lakeside property offering breathtaking views and modern comfort for an unforgettable stay.',
        images: ['/hotel-lakeside-retreat.png'],
        amenities: ['Lake View Rooms', 'Boat Rides', 'Outdoor Pool', 'Kids Play Area', 'Yoga Studio', '24/7 Room Service'],
        eventId: '1',
    },
    {
        id: 'cv-4',
        name: 'City Center Plaza',
        location: 'Jaipur, Rajasthan',
        description: 'Contemporary luxury in the heart of the city with easy access to shopping and cultural attractions.',
        images: ['/hotel-city-center.png'],
        amenities: ['Business Center', 'Rooftop Bar', 'Fitness Center', 'Shopping Arcade', 'Multi-Cuisine Dining', 'Parking'],
        eventId: '1',
    },
];
