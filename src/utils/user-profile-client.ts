import { IUserProfileDetail } from '@/models/users/profile.model'

/**
 * Client-side function to fetch user profile and update store
 * This function calls the API route which uses server-side getUserProfile
 */
export const fetchAndUpdateUserProfile =
   async (): Promise<IUserProfileDetail | null> => {
      try {
         const response = await fetch('/api/user-profile')

         if (!response.ok) {
            throw new Error(`Failed to fetch user profile: ${response.status}`)
         }

         const userProfile: IUserProfileDetail = await response.json()
         return userProfile
      } catch (error) {
         console.error('Error fetching user profile:', error)
         return null
      }
   }
