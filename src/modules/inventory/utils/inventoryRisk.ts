/**
 * Calculate inventory risk level and return appropriate color class
 */
import { INVENTORY_RISK_THRESHOLDS } from '@/config/constants';

export function getInventoryRiskColor(consumed: number): string {
    if (consumed >= INVENTORY_RISK_THRESHOLDS.HIGH) {
        return 'text-error';
    }
    if (consumed >= INVENTORY_RISK_THRESHOLDS.MEDIUM) {
        return 'text-warning';
    }
    return 'text-success';
}

export function getInventoryRiskLevel(consumed: number): 'high' | 'medium' | 'low' {
    if (consumed >= INVENTORY_RISK_THRESHOLDS.HIGH) {
        return 'high';
    }
    if (consumed >= INVENTORY_RISK_THRESHOLDS.MEDIUM) {
        return 'medium';
    }
    return 'low';
}
