'use client'

import { usePathname } from 'next/navigation'
import { Stack } from '@mui/material'
import { ReactNode } from 'react'
import MobileBottomNav from '@/components/shared/bottomNavigation/bottomNavigation'
import Header from '@/components/shared/header/Header'
import { Footer } from '@/components/shared/footer'

interface LayoutWrapperProps {
    children: ReactNode
}

const LANDING_PAGES = ['/tour', '/entertainment', '/hotel']

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const pathname = usePathname()

    // check if current route is an landing page, shows bottomNav and different header
    const isLandingPage = LANDING_PAGES.some(page => pathname?.endsWith(page) || pathname?.endsWith(`${page}/`))


    // Check if current route is an auth route
    const isAuthRoute = pathname?.startsWith('/fa/auth')

    if (isAuthRoute) {
        // For auth route, render children without Header and Footer
        return <>{children}</>
    }

    // For regular routes, render with Header and Footer
    return (
        <>
            <Stack className="z-20!">

                <Header />
                <Stack
                    component="main"
                    className={`min-h-[70vh]`}
                >
                    {children}
                </Stack>
                <Footer />
            </Stack>
            {isLandingPage && (
                <MobileBottomNav />
            )}
        </>
    )
}
