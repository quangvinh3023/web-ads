/** Demo assumptions only: fixed 30-day cycle, fractional token balances. */
export function upgradePrice(monthlyFee: number, remainingDays: number): number {
  if (!Number.isFinite(monthlyFee) || !Number.isFinite(remainingDays) || monthlyFee < 0 || remainingDays < 0 || remainingDays > 30) throw new Error('Invalid demo billing input');
  return Math.round(monthlyFee * remainingDays / 30 * 100) / 100;
}
