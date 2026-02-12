/**
 * Application route constants
 */

export const ROUTES = {
    // Public routes
    HOME: '/',
    LOGIN: '/login',

    // Agent routes
    DASHBOARD: '/dashboard',
    ANALYTICS: '/analytics',
    POST_BOOKING_INTELLIGENCE: '/post-booking-intelligence',

    // Event routes
    EVENT: (eventId: string) => `/events/${eventId}`,
    EVENT_GUESTS: (eventId: string) => `/events/${eventId}/guests`,
    EVENT_MANAGE_GUESTS: (eventId: string) => `/events/${eventId}/manage-guests`,
    EVENT_INVENTORY: (eventId: string) => `/events/${eventId}/inventory`,
    EVENT_ROOM_MAPPING: (eventId: string) => `/events/${eventId}/room-mapping`,
    EVENT_BOOKING: (eventId: string) => `/events/${eventId}/booking`,
    EVENT_HOTELS: (eventId: string) => `/events/${eventId}/hotels`,
    EVENT_FLIGHTS: (eventId: string) => `/events/${eventId}/flights`,
    EVENT_POST_BOOKING: (eventId: string) => `/events/${eventId}/post-booking`,

    // Guest portal routes
    EVENT_PORTAL: (eventId: string, guestId: string) => `/events/${eventId}/portal/${guestId}`,

    // Guest microsite
    MICROSITE: (eventSlug: string) => `/m/${eventSlug}`,
} as const;
