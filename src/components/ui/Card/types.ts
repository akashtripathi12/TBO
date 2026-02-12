import { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'hover' | 'bordered';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

export interface MetricCardProps {
    label: string;
    value: string | number;
    change?: number;
    trend?: 'up' | 'down' | 'neutral';
    className?: string;
}
