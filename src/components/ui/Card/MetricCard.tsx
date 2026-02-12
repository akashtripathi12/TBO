import { memo } from 'react';
import { cn } from '@/utils';
import { Card } from './Card';
import { MetricCardProps } from './types';

/**
 * MetricCard component for displaying dashboard metrics
 * Optimized with React.memo for performance
 */
export const MetricCard = memo(function MetricCard({ 
  label,
  value,
  change,
  trend,
  className 
}: MetricCardProps) {
  const trendColor = 
    trend === 'up' ? 'text-success' : 
    trend === 'down' ? 'text-error' : 
    'text-neutral-500';
  
  const trendIcon = 
    trend === 'up' ? '↑' : 
    trend === 'down' ? '↓' : 
    '→';

  return (
    <Card variant="hover" className={className}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-600 font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-neutral-900">{value}</p>
        </div>
        {change !== undefined && (
          <div className={cn('flex items-center gap-1 text-sm font-semibold', trendColor)}>
            <span>{trendIcon}</span>
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </Card>
  );
});
