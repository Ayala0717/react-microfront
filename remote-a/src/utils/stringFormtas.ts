/**
 *
 * Format decimal format to plan number
 *
 *» @param str - Decimal format field
 * @returns Plain text without decimal
 *
 */

export function localeStringToNumber(str: string | number) {
  return Number(String(str).replace(/[^/\d.-]+/g, ''))
}

/**
 *
 * @param str - String to be limited
 * @param chars - The total numbers of characters
 * @returns String limited
 */

export function limitString(str: string, chars = 200) {
  const reg = new RegExp(`^(.{${chars}}[^\\s]*).*`)

  return str.replace(reg, '$1')
}
