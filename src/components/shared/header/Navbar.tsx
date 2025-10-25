"use client";
import { Divider, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

// const navbar = [
//   { title: 'صفحه اصلی ', href: '/' },
//   { title: 'خدمات', href: '/services' },
//   { title: 'پروژه ها', href: '/projects' },
//   { title: 'فعالان', href: '/providers' },
//   { title: 'بلاگ', href: '/blog' },
//   { title: 'تماس با ما', href: '/contact' }
// ]

const navbarItems = [
  { titleKey: "تور کیش", href: "/fa/tour" },
  { titleKey: "هتل‌های کیش", href: "/fa/hotel" },
  { titleKey: "تفریحات کیش", href: "/fa/entertainment" },
  { titleKey: "لینک‌های مفید", href: "/" },
];

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const theme = useTheme();

  return (
    <nav>
      <Stack
        component="ul"
        direction="row"
        gap={4}
        sx={{ listStyle: "none", p: 0, m: 0 }}
        spacing={0}
      >
        {navbarItems.map((item, i) => (
          <>
            <li key={item.href} className="flex flex-row gap-10 ">
              <Typography
                component={Link}
                href={item.href}
                className="hover:font-semibold! hover:border-b-3 hover:border-[#FF8C0B] transition-all duration-100 py-2! ease-linear!"
                sx={{
                  fontWeight: 400,
                  color: "text.primary",
                }}
                key={"navbarItem" + i}
              >
                {item.titleKey}
              </Typography>
              {i < navbarItems.length - 1 && (
                <Divider orientation="vertical" flexItem />
              )}
            </li>
          </>
        ))}
      </Stack>
    </nav>
  );
}
