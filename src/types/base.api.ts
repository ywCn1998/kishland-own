export interface IApiResponse<T> {
   result: T
   status?: string | boolean
   message?: string
}

export interface ReactQueryCallbacks<T> {
   onSuccess?: (data: T) => void
   onError?: (error: unknown) => void
}
