'use client'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl';

// const navbar = [
//   { title: 'صفحه اصلی ', href: '/' },
//   { title: 'خدمات', href: '/services' },
//   { title: 'پروژه ها', href: '/projects' },
//   { title: 'فعالان', href: '/providers' },
//   { title: 'بلاگ', href: '/blog' },
//   { title: 'تماس با ما', href: '/contact' }
// ]


const navbarItems = [
  { titleKey: 'home', href: '/' },
  { titleKey: 'services', href: '/services' },
  { titleKey: 'projects', href: '/projects' },
  { titleKey: 'providers', href: '/providers' },
  { titleKey: 'blog', href: '/blog' },
  { titleKey: 'contact_us', href: '/contact' }
];

export function Navbar() {
  const pathname = usePathname()
  const theme = useTheme()
  const t = useTranslations('Navbar');

  return (
    <nav>
      <Stack
        component="ul"
        direction="row"
        gap={4}
        sx={{ listStyle: 'none', p: 0, m: 0 }}
      >
        {navbarItems.map((item) => (
          <li key={item.href}>
            <Typography
              component={Link}
              href={item.href}
              sx={{
                fontWeight: 500,
                color:
                  item.href === pathname
                    ? theme.palette.secondary.main
                    : 'inherit',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: theme.palette.secondary.main
                }
              }}
            >
              {
                t(item.titleKey)
              }
            </Typography>
          </li>
        ))}
      </Stack>
    </nav>
  )
}
