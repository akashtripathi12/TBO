/**
 * Status configuration for badges and chips
 */

export type StatusType =
    | 'success'
    | 'warning'
    | 'error'
    | 'processing'
    | 'active'
    | 'upcoming'
    | 'completed';

export interface StatusConfig {
    bg: string;
    text: string;
    border: string;
    icon: string;
    defaultLabel: string;
}

export const STATUS_CONFIG: Record<StatusType, StatusConfig> = {
    success: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/20',
        icon: '✓',
        defaultLabel: 'Success',
    },
    warning: {
        bg: 'bg-warning/10',
        text: 'text-warning',
        border: 'border-warning/20',
        icon: '⚠',
        defaultLabel: 'Warning',
    },
    error: {
        bg: 'bg-error/10',
        text: 'text-error',
        border: 'border-error/20',
        icon: '✕',
        defaultLabel: 'Error',
    },
    processing: {
        bg: 'bg-processing/10',
        text: 'text-processing',
        border: 'border-processing/20',
        icon: '⟳',
        defaultLabel: 'Processing',
    },
    active: {
        bg: 'bg-success/10',
        text: 'text-success',
        border: 'border-success/20',
        icon: '●',
        defaultLabel: 'Active',
    },
    upcoming: {
        bg: 'bg-processing/10',
        text: 'text-processing',
        border: 'border-processing/20',
        icon: '○',
        defaultLabel: 'Upcoming',
    },
    completed: {
        bg: 'bg-neutral-200',
        text: 'text-neutral-600',
        border: 'border-neutral-300',
        icon: '✓',
        defaultLabel: 'Completed',
    },
};
