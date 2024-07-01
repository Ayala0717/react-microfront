// Types for utils
declare module 'remoteUtils/utils' {
  export function toLocaleString(
    num: number,
    format?: Intl.NumberFormat
  ): string

  export function localeStringToNumber(str: string | number): number

  export function limitString(str: string, chars?: number): string
}
