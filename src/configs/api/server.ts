import { API_ADDRESS } from '../app'
import { handleFetchError, networkErrorStrategy } from './error'
import { cookies } from 'next/headers'

interface QueryParamValue {
   toString(): string
}

type QueryParams = Record<string, QueryParamValue>

interface FetchOptions<TBody = undefined> extends RequestInit {
   params?: QueryParams
   body?: TBody extends undefined ? undefined : string // باید JSON.stringify شده باشد
}

const buildQueryParams = (params: QueryParams) =>
   new URLSearchParams(
      Object.entries(params).reduce<Record<string, string>>(
         (acc, [key, value]) => {
            acc[key] = value.toString()
            return acc
         },
         {}
      )
   ).toString()

export const fetchServer = async <TResponse, TBody = undefined>(
   endpoint: string,
   { params, body, ...options }: FetchOptions<TBody> = {}
): Promise<TResponse> => {
   const baseUrl = API_ADDRESS
   const url = params
      ? `${baseUrl}${endpoint}?${buildQueryParams(params)}`
      : `${baseUrl}${endpoint}`

   try {
      const response = await fetch(url, {
         headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
         },
         credentials: 'include',
         body,
         ...options
      })

      if (!response.ok) {
         handleFetchError(response as any)
      }

      return await response.json()
   } catch (error) {
      networkErrorStrategy()
      throw error
   }
}

// ---------------------------- Add this for shenasname - have authenication too
export const fetchServerWithAuth = async <TResponse, TBody = undefined>(
   endpoint: string,
   { params, body, ...options }: FetchOptions<TBody> = {}
): Promise<TResponse> => {
   const baseUrl = API_ADDRESS
   // const url = params
   //   ? `${baseUrl}${endpoint}?${buildQueryParams(params)}`
   //   : `${baseUrl}${endpoint}`

   const url = `${baseUrl}/${endpoint}`

   try {
      const cookieStore = await cookies()
      const token = cookieStore.get('access_token')?.value || null

      const response = await fetch(url, {
         headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
            ...(token ? { Authorization: `Bearer ${token}` } : {})
         },
         credentials: 'include',
         body,
         ...options
      })

      if (!response.ok) {
         handleFetchError(response as any)
      }

      return await response.json()
   } catch (error) {
      networkErrorStrategy()
      throw error
   }
}
