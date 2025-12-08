/**
 * Convert Persian/Arabic digits to English digits
 * @param value - String containing Persian/Arabic digits
 * @returns String with English digits
 */
export const convertPersianDigitsToEnglish = (value: string): string =>
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
export const convertEnglishDigitsToPersian = (value: string): string =>
   value.replace(/\d/g, (digit) =>
      String.fromCharCode(digit.charCodeAt(0) + 1728)
   )

/**
 * Clean phone number by removing spaces, dashes, and parentheses
 * @param phoneNumber - Raw phone number string
 * @returns Cleaned phone number
 */
export const cleanPhoneNumber = (phoneNumber: string): string =>
   phoneNumber.replace(/[\s\-\(\)]/g, '')

/**
 * Format phone number for display (09123456789 -> 0912 345 6789)
 * @param phoneNumber - Clean phone number string
 * @returns Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
   if (phoneNumber.length === 11 && phoneNumber.startsWith('09')) {
      return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`
   }
   return phoneNumber
}
