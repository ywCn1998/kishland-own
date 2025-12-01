import { z } from 'zod'
import { convertPersianDigitsToEnglish } from '@/utils/string'

// ========================================
// Common Field Schemas
// ========================================

export const phoneNumberSchema = z
   .string()
   .nonempty('شماره موبایل نمی‌تواند خالی باشد.')
   .transform(convertPersianDigitsToEnglish)
   .refine((value) => /^09\d{9}$/.test(value), {
      message: 'لطفا یک شماره موبایل صحیح وارد نمایید'
   })

export const optionalPhoneNumberSchema = z
   .string()
   .optional()
   .transform((value) => (value ? convertPersianDigitsToEnglish(value) : value))
   .refine((value) => !value || /^09\d{9}$/.test(value), {
      message: 'لطفا یک شماره موبایل صحیح وارد نمایید'
   })

export const optionalPhoneSchema = z
   .string()
   .optional()
   .transform((value) => (value ? convertPersianDigitsToEnglish(value) : value))
   .refine((value) => !value || /^0\d{10}$/.test(value), {
      message: 'لطفا یک شماره ثابت صحیح  11 رقمی با پیش شماره 0 وارد نمایید'
   })

export const passwordSchema = z
   .string()
   .min(5, 'رمز عبور باید حداقل 5 کاراکتر باشد.')

export const confirmPasswordSchema = z
   .string()
   .min(5, 'رمز عبور باید حداقل 5 کاراکتر باشد.')

export const otpSchema = z
   .string()
   .nonempty('کد تایید نمی‌تواند خالی باشد.')
   .transform(convertPersianDigitsToEnglish)
   .refine((value) => /^\d{4,6}$/.test(value), {
      message: 'کد تایید باید بین 4 تا 6 رقم باشد.'
   })

export const nationalCodeSchema = z
   .string()
   .min(1, 'کد ملی نمی‌تواند خالی باشد.')
   .length(10, 'کد ملی باید دقیقاً ۱۰ رقم باشد.')
   .transform(convertPersianDigitsToEnglish)
   .refine((value) => /^\d{10}$/.test(value), {
      message: 'کد ملی باید شامل ۱۰ رقم باشد.'
   })

export const postalCodeSchema = z
   .string()
   .min(1, 'کد پستی نمی‌تواند خالی باشد.')
   .length(10, 'کد پستی باید دقیقاً ۱۰ رقم باشد.')
   .transform(convertPersianDigitsToEnglish)
   .refine((value) => /^\d{10}$/.test(value), {
      message: 'کد پستی باید شامل ۱۰ رقم باشد.'
   })

export const emailSchema = z.email('ایمیل معتبر نیست')

export const requiredEmailSchema = z.email('ایمیل معتبر نیست')

export const optionalEmailSchema = z
   .string()
   .optional()
   .refine((value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'ایمیل معتبر نیست'
   })

// ========================================
// Profile Common Fields
// ========================================

export const firstNameSchema = z.string().min(1, 'نام الزامی است')
export const lastNameSchema = z.string().min(1, 'نام خانوادگی الزامی است')
export const genderSchema = z.enum(['ML', 'FL'])
export const avatarSchema = z.string().optional()


// ========================================
// Location Fields
// ========================================

export const countrySchema = z.string().min(1, 'کشور الزامی است')
export const provinceSchema = z.string().min(1, 'استان الزامی است')
export const citySchema = z.string().min(1, 'شهر الزامی است')
export const addressSchema = z.string().min(1, 'آدرس الزامی است')

// ========================================
// Utility Schemas
// ========================================

export const baseListParam = z.object({
   page: z.string().catch('1').optional(),
   page_size: z.string().catch('30').optional()
})

export const requiredStringSchema = (fieldName: string) =>
   z.string().min(1, `${fieldName} نمی‌تواند خالی باشد.`)

export const optionalStringSchema = z.string().optional()

// ========================================
// Enum Schema Utilities
// ========================================

/**
 * Creates a Zod enum schema with Farsi error messages
 * @param enumValues - Array of enum values
 * @param fieldName - Name of the field for error messages
 * @returns Zod schema with Farsi error messages
 */
export const createEnumSchema = <T extends string>(
   enumValues: readonly T[],
   fieldName: string
) => {
   return z
      .string()
      .min(1, `${fieldName} الزامی است`)
      .refine((value) => enumValues.includes(value as T), {
         message: `${fieldName} انتخاب شده معتبر نیست`
      })
}
