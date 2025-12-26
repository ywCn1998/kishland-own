import ClientProviders from "@/providers/ClientProviders";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <ClientProviders>
      <NextIntlClientProvider>
        {children}
      </NextIntlClientProvider>
    </ClientProviders>
  );
}