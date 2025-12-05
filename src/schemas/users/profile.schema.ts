import { z } from 'zod'
import {
   emailSchema,
   genderSchema
} from '@/schemas/base.schema'

// ========================================
// AIILL Profile Schemas (فعال در صنعت ساختمان - حقوقی)
// ========================================

/**
 * Schema for AIILL profile GET response
 */
export const getAIILLProfileSchema = z.object({
   first_name: z.string(),
   last_name: z.string(),
   gender: genderSchema,
   economic_code: z.string(),
   avatar: z.string(),
   phone_number: z.string(),
   email: emailSchema,
   office_name: z.string(),
   office_name_en: z.string(),
   registration_number: z.string(),
   office_national_id: z.string()
})





