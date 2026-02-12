import { STATUS_CONFIG } from '@/config/statusConfig';
import { cn } from '@/utils';
import { BadgeProps } from './types';

/**
 * Badge component with status variants
 * Replaces the old StatusChip component with a more flexible API
 */
export function Badge({ 
  variant = 'success', 
  label, 
  icon,
  size = 'md',
  className 
}: BadgeProps) {
  const config = STATUS_CONFIG[variant];
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium border',
        config.bg,
        config.text,
        config.border,
        sizeClasses[size],
        className
      )}
    >
      {icon !== undefined ? (
        <span>{icon}</span>
      ) : (
        <span>{config.icon}</span>
      )}
      <span>{label || config.defaultLabel}</span>
    </span>
  );
}
