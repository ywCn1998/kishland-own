import { Problem } from './types'
import { AxiosError } from 'axios'

export const errorHandler: Record<number, (error: Problem) => void> = {
   400: (error) => console.warn('Bad Request:', error.message),
   401: (error) => console.warn('Unauthorized:', error.message),
   404: (error) => console.warn('Not Found:', error.message),
   422: (error) => console.warn('Validation Error:', error.message),
   500: (error) => console.error('Server Error:', error.message)
}

export const networkErrorStrategy = () => {
   console.error('Network Error or API unreachable')
}

export const handleFetchError = (error: AxiosError): Problem => {
   console.log('Axios Error:', error)

   if (error.response) {
      // Server responded with error status
      const status = error.response.status
      const data = error.response.data as any

      const errorData: Problem = {
         status: status.toString(),
         message: data?.message || data?.detail || 'خطای سرور'
      }

      errorHandler[status]?.(errorData)

      return errorData
   } else if (error.request) {
      // Network error
      networkErrorStrategy()
      return {
         status: 'NETWORK_ERROR',
         message: 'خطا در اتصال به سرور'
      }
   } else {
      // Other error
      // console.error('Error:', error.message)
      return {
         status: 'UNKNOWN_ERROR',
         message: 'خطای ناشناخته'
      }
   }
}
