'use client'

import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { QueryStaleTime } from '@/utils/queryClient'
import MuiProvider from './MuiProvider'

export default function ClientProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: QueryStaleTime,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <MuiProvider>
        {children}
      </MuiProvider>
    </QueryClientProvider>
  )
}
