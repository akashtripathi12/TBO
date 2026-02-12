import { cn } from '@/utils';
import { CardProps } from './types';

/**
 * Base Card component
 * Provides consistent card styling with variants
 */
export function Card({ 
  children, 
  variant = 'default',
  padding = 'md',
  className,
  onClick 
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg border border-neutral-200';
  
  const variantClasses = {
    default: '',
    hover: 'hover:shadow-md transition-shadow cursor-pointer',
    bordered: 'border-2',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
