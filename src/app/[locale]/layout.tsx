import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MuiProvider from "@/providers/MuiProvider";
import type { Metadata } from "next";
import "../globals.css";
import "../../components/animationsStyles/index.css";
import { lahzeh, lexend } from "@/theme/fonts";
import { Box, Stack } from "@mui/material";
import Header from "@/components/shared/header/Header";
import { Footer } from "@/components/shared/footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import Image from "next/image";
import RevealObserver from "@/components/shared/RevealObserver";
import MobileBottomNav from "@/components/shared/bottomNavigation/bottomNavigation";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Params = {
  locale: string;
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale });
  return {
    title: t("main_title"),
  };
}

interface RootLayoutProps {
  params: Params;
  children: ReactNode;
}

export default async function RootLayout({
  params,
  children,
}: RootLayoutProps) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html dir={"rtl"} lang={locale}>
      <Box
        component="body"
        className={`${lahzeh.variable} ${lexend.variable} relative! hero-bg`}
      >
        <div className="absolute! top-0! w-full! " style={{ zIndex: -10 }}>
          <div className="relative! w-full! h-100! !hidden lg:!block">
            <Image src="/images/main-header.png" alt="main-header" fill />
          </div>
        </div>
        <MuiProvider>
          <NextIntlClientProvider>
            <Stack className="z-20!">
              <RevealObserver
                options={{
                  threshold: 0.15,
                  rootMargin: "0px 0px -10% 0px",
                  staggerStepMs: 80,
                  visibleClass: "is-visible",
                }}
              />
              <Header />
              <Stack component="main" sx={{ minHeight: "70vh" }}>
                {children}
              </Stack>
              <Footer />
            </Stack>
             <MobileBottomNav /> 
          </NextIntlClientProvider>
        </MuiProvider>
      </Box>
    </html>
  );
}
