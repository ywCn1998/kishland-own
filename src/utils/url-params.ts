/**
 * Builds URL query parameters from an object, filtering out null, undefined, and empty string values
 * @param params - Object with parameter key-value pairs
 * @returns URLSearchParams object ready to be used
 */
export function buildUrlParams(params: Record<string, any>): URLSearchParams {
   const searchParams = new URLSearchParams()

   Object.entries(params).forEach(([key, value]) => {
      // Handle different types of values
      if (value !== null && value !== undefined && value !== '') {
         // For arrays, check if they have items
         if (Array.isArray(value)) {
            if (value.length > 0) {
               searchParams.append(key, String(value))
            }
         } else {
            // For non-arrays (strings, numbers, booleans), add them directly
            searchParams.append(key, String(value))
         }
      }
   })

   return searchParams
}

/**
 * Builds URL query string from an object, filtering out null, undefined, and empty string values
 * @param params - Object with parameter key-value pairs
 * @returns Query string (without leading ?) or empty string if no valid params
 */
export function buildQueryString(params: Record<string, any>): string {
   const searchParams = buildUrlParams(params)
   const queryString = searchParams.toString()
   return queryString ? `?${queryString}` : ''
}
