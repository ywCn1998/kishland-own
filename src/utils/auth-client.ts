import { ILoginResponse } from '@/models/users/auth.model'

// Cookie configuration for secure token storage
const COOKIE_CONFIG = {
   ACCESS_TOKEN: 'access_token',
   REFRESH_TOKEN: 'refresh_token',
   MAX_AGE: 7 * 24 * 60 * 60, // 7 days in seconds
   PATH: '/',
   SECURE: process.env.NODE_ENV === 'production',
   SAME_SITE: 'lax' as const
}

/**
 * Client-side authentication utilities
 *
 * STEP 1: Secure token storage only
 * - Store access and refresh tokens securely in cookies
 * - Accessible from both client and server side
 * - No user info storage for now
 */
export const ClientAuthUtils = {
   // Set cookie on client side
   setCookie: (name: string, value: string, maxAge?: number) => {
      const cookieString = [
         `${name}=${encodeURIComponent(value)}`,
         `Max-Age=${maxAge || COOKIE_CONFIG.MAX_AGE}`,
         `Path=${COOKIE_CONFIG.PATH}`,
         `SameSite=${COOKIE_CONFIG.SAME_SITE}`,
         COOKIE_CONFIG.SECURE ? 'Secure' : ''
      ]
         .filter(Boolean)
         .join('; ')

      document.cookie = cookieString
   },

   // Get cookie on client side
   getCookie: (name: string): string | null => {
      if (typeof document === 'undefined') return null

      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)

      if (parts.length === 2) {
         const cookieValue = parts.pop()?.split(';').shift()
         return cookieValue ? decodeURIComponent(cookieValue) : null
      }

      return null
   },

   // Delete cookie on client side
   deleteCookie: (name: string) => {
      document.cookie = `${name}=; Path=${COOKIE_CONFIG.PATH}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
   },

   // Store tokens securely
   setTokens: (tokens: { access: string; refresh: string }) => {
      ClientAuthUtils.setCookie(COOKIE_CONFIG.ACCESS_TOKEN, tokens.access)
      ClientAuthUtils.setCookie(COOKIE_CONFIG.REFRESH_TOKEN, tokens.refresh)
   },

   // Get tokens
   getTokens: () => {
      const access = ClientAuthUtils.getCookie(COOKIE_CONFIG.ACCESS_TOKEN)
      const refresh = ClientAuthUtils.getCookie(COOKIE_CONFIG.REFRESH_TOKEN)
      return access && refresh ? { access, refresh } : null
   },

   // Get access token for API calls
   getAccessToken: (): string | null => {
      const tokens = ClientAuthUtils.getTokens()
      return tokens?.access || null
   },

   // Get refresh token
   getRefreshToken: (): string | null => {
      const tokens = ClientAuthUtils.getTokens()
      return tokens?.refresh || null
   },

   // Clear all auth data
   clearAuth: () => {
      ClientAuthUtils.deleteCookie(COOKIE_CONFIG.ACCESS_TOKEN)
      ClientAuthUtils.deleteCookie(COOKIE_CONFIG.REFRESH_TOKEN)
   },

   // Clear all auth data including user profile from localStorage
   clearAllAuthData: () => {
      // Clear cookies
      ClientAuthUtils.deleteCookie(COOKIE_CONFIG.ACCESS_TOKEN)
      ClientAuthUtils.deleteCookie(COOKIE_CONFIG.REFRESH_TOKEN)

      // Clear user profile from localStorage
      if (typeof window !== 'undefined') {
         localStorage.removeItem('user-profile-storage')

         // Dispatch custom event to clear Zustand store
         window.dispatchEvent(new CustomEvent('clear-user-profile'))
      }
   },

   // Comprehensive logout function that clears everything and reloads
   logout: () => {
      console.log('🔄 Starting logout process...')

      // Clear all auth data
      ClientAuthUtils.clearAllAuthData()

      // Additional cleanup for debugging
      if (typeof window !== 'undefined') {
         // Clear any other potential storage
         sessionStorage.clear()

         // Log what's being cleared
         console.log('🧹 Cleared localStorage, sessionStorage, and cookies')
         console.log('📤 Redirecting to login page...')
      }

      // Force page reload to ensure clean state
      if (typeof window !== 'undefined') {
         window.location.href = '/auth/login'
      }
   },

   // Check if authenticated
   isAuthenticated: (): boolean => {
      const tokens = ClientAuthUtils.getTokens()
      return !!tokens?.access && tokens.access.trim() !== ''
   },

   // Store auth response (for login and register confirmation)
   // Only stores tokens, no user info
   storeAuthResponse: (response: any) => {
      if (response.result) {
         // Login response
         const { result } = response
         ClientAuthUtils.setTokens({
            access: result.access,
            refresh: result.refresh
         })
      } else {
         // Register confirmation response
         ClientAuthUtils.setTokens({
            access: response.access,
            refresh: response.refresh
         })
      }
   }
}

// Hook for client-side auth state (for React components)
export const useAuthState = () => {
   if (typeof window === 'undefined') {
      throw new Error('useAuthState can only be used in client components')
   }

   const tokens = ClientAuthUtils.getTokens()
   const isAuthenticated = ClientAuthUtils.isAuthenticated()

   return {
      tokens,
      isAuthenticated,
      login: (loginResponse: ILoginResponse) => {
         ClientAuthUtils.storeAuthResponse(loginResponse)
      },
      logout: () => {
         ClientAuthUtils.clearAuth()
      }
   }
}
