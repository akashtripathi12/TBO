/**
 * Mock metric data for dashboard
 */
export interface MetricData {
    label: string;
    value: string | number;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
}

export const mockMetrics: MetricData[] = [
    { label: 'Active Events', value: 12, change: 8, trend: 'up' },
    { label: 'Total Guests', value: '1,240', change: 15, trend: 'up' },
    { label: 'Rooms Blocked', value: 485, change: -3, trend: 'down' },
    { label: 'Rooms Sold', value: 392, change: 12, trend: 'up' },
    { label: 'Inventory Risk', value: '18%', change: -5, trend: 'down' },
    { label: 'Revenue Locked', value: '₹42.8L', change: 22, trend: 'up' },
];
