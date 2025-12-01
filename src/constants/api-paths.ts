export const API_PATHS = {
   USERS: {
      AUTH: {
         LOGIN: '/users/v2/auth/login/',
         LOGOUT: '/users/v2/auth/logout/',
         SIGNUP: '/users/v2/auth/register/',
         REGISTER: '/users/v2/auth/register/',
         REGISTER_CONFIRMATION: '/users/v2/auth/register/',
         RESET_PASSWORD: '/users/v2/auth/reset-password/',
         RESET_PASSWORD_CONFIRMATION: '/users/v2/auth/reset-password/',
         CHANGE_PASSWORD: '/users/v2/auth/change-password/',
         REFRESH_TOKEN: '/users/refresh-token/',
         VERIFY_TOKEN: '/users/v2/token/verify/'
      },
      ACHIEVEMENTS: '/users/v2/achievements/',
      WORK_SAMPLE: '/users/v2/work-sample/',
      ADVERTISEMENTS: '/advertisements/v2/ads/',
      COMPANY: {
      },
      PROFILE: {
      }
   },
   GENERAL: {
      // LOCATIONS: '/places/v2/locations/'
   },
   SHARED: {
      SEARCH_OPTIONS: '/electronic-document/v1/project-search-options/'
   },
   CONTACT: {
      INFO: '/users/v2/contact/info/'
   },
} as const
