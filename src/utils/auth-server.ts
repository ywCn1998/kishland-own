import { cookies } from 'next/headers'

// Cookie configuration for secure token storage (server-side)
const COOKIE_CONFIG = {
   ACCESS_TOKEN: 'access_token',
   REFRESH_TOKEN: 'refresh_token'
}

/**
 * Server-side authentication utilities
 *
 * STEP 1: Secure token storage only
 * - Access tokens stored in cookies from client side
 * - Accessible from server side for SSR and API routes
 * - No user info storage for now
 */
export const ServerAuthUtils = {
   // Get cookie on server side
   getCookie: async (name: string): Promise<string | null> => {
      try {
         const cookieStore = await cookies()
         const cookie = cookieStore.get(name)
         return cookie ? decodeURIComponent(cookie.value) : null
      } catch (error) {
         console.error('Error getting server cookie:', error)
         return null
      }
   },

   // Get tokens on server side
   getTokens: async () => {
      const access = await ServerAuthUtils.getCookie(COOKIE_CONFIG.ACCESS_TOKEN)
      const refresh = await ServerAuthUtils.getCookie(
         COOKIE_CONFIG.REFRESH_TOKEN
      )
      return access && refresh ? { access, refresh } : null
   },

   // Check if authenticated on server side
   isAuthenticated: async (): Promise<boolean> => {
      const tokens = await ServerAuthUtils.getTokens()
      return !!tokens?.access
   },

   // Get access token for server-side API calls
   getAccessToken: async (): Promise<string | null> => {
      const tokens = await ServerAuthUtils.getTokens()
      return tokens?.access || null
   },

   // Get refresh token for server-side API calls
   getRefreshToken: async (): Promise<string | null> => {
      const tokens = await ServerAuthUtils.getTokens()
      return tokens?.refresh || null
   }
}
