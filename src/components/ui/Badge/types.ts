import { StatusType } from '@/config/statusConfig';

export interface BadgeProps {
    variant?: StatusType;
    label?: string;
    icon?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
