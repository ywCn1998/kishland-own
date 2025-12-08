/**
 * Convert Persian/Arabic digits to English digits
 * @param value - String containing Persian/Arabic digits
 * @returns String with English digits
 */
export const convertToEnglishNumbers = (value: string): string =>
   value.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, (digit) =>
      String.fromCharCode(
         digit.charCodeAt(0) - (digit.charCodeAt(0) >= 0x06f0 ? 1728 : 1584)
      )
   )

/**
 * Convert English digits to Persian digits
 * @param value - String containing English digits
 * @returns String with Persian digits
 */
export const convertToPersianNumbers = (value: string): string =>
   value.replace(/\d/g, (digit) =>
      String.fromCharCode(digit.charCodeAt(0) + 1728)
   )

/**
 * Check if a string contains only digits
 * @param value - String to check
 * @returns True if string contains only digits
 */
export const isDigitsOnly = (value: string): boolean => /^\d+$/.test(value)

/**
 * Format number with thousand separators
 * @param num - Number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => num.toLocaleString('fa-IR')

/**
 * Parse a string to number, handling Persian digits
 * @param value - String to parse
 * @returns Parsed number or NaN if invalid
 */
export const parseNumber = (value: string): number =>
   parseInt(convertToEnglishNumbers(value), 10)
