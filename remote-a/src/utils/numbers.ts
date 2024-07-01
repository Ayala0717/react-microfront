/**
 *
 * @param {number} num - The number to be converted
 * @param {Intl.NumberFormat} format - Object of formats to be applicate in the number
 * @returns {string} Returns number transformed to string and locale format
 */

export function toLocaleString(
  num: number,
  format: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
): string {
  if (!num) return '0.00'

  return num.toLocaleString('en-US', format)
}
