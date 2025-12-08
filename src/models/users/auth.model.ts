import { z } from 'zod'
import {
   loginSchema,
   registerSchema,
   registerConfirmationSchema,
   resetPasswordSchema,
   resetPasswordConfirmationSchema,
   changePasswordSchema
} from '@/schemas/users/auth.schema'
import { IApiResponse } from '@/types/base.api'

// ========================================
// Auth Role Models
// ========================================

export interface AuthRole {
   company_type: string
   roles: {
      name: string
      engineering_type: string
   }
}

// ========================================
// Login Models
// ========================================

export type ILoginParams = z.infer<typeof loginSchema>
export type ILoginResult = {
   access: string
   refresh: string
   username: string
   user_type: string
   complete_profile: boolean
   profile_percent: number
   role: AuthRole
   company_u_id: string
   company_slug: string
   avatar: string
   package_status: boolean
   company_status: string
   company_type: string
}
export interface ILoginResponse extends IApiResponse<ILoginResult> {}

// ========================================
// Register Models
// ========================================

export type IRegisterParams = z.infer<typeof registerSchema>
export interface IRegisterResponse {
   message: string
   expire_time: number
}

export type IRegisterConfirmationParams = z.infer<
   typeof registerConfirmationSchema
>
export interface IRegisterConfirmationResponse {
   access: string
   refresh: string
   message: string
}

// ========================================
// Reset Password Models
// ========================================

export type IResetPasswordParams = z.infer<typeof resetPasswordSchema>
export interface IResetPasswordResponse extends IRegisterResponse {}

export type IResetPasswordConfirmationParams = z.infer<
   typeof resetPasswordConfirmationSchema
>
export interface IResetPasswordConfirmationResponse {}

// ========================================
// Token Models
// ========================================

export interface IRefreshTokenResponse {
   access: string
}

// ========================================
// Token Verification Models
// ========================================

export interface ITokenVerifyParams {
   token: string
}

export interface ITokenVerifyResponse {
   valid: boolean
   message?: string
}

// ========================================
// Change Password Models
// ========================================

export type IChangePasswordParams = z.infer<typeof changePasswordSchema>
export interface IChangePasswordResponse {}
