import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import NavbarServer from '@/components/shared/navbar/NavbarServer';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import Script from 'next/script';
import './globals.css';
import ScrollToTop from '@/components/shared/scroll-to-top/ScrollToTop';
import PostHogProvider from '@/components/shared/PostHogProvider';
import ClarityProvider from '@/components/shared/ClarityProvider';
import { CookieConsentBanner } from '@/components/shared/cookie-consent';
import GoogleAnalyticsProvider from '@/components/shared/GoogleAnalyticsProvider';

// Updated metadata configuration to include Pinterest verification
export const metadata: Metadata = {
  ...generateMetadata(),
  verification: {
    other: {
      'p:domain_verify': 'b46904e36db98e9146459b25853b95db',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`} suppressHydrationWarning>
        {/* Affonso affiliate tracking — lazyOnload defers until browser is idle */}
        <Script
          src="https://cdn.affonso.io/js/pixel.min.js"
          data-affonso="cmoqxj2n2000811cyjyliusjy"
          data-cookie_duration="30"
          strategy="lazyOnload"
        />
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ClarityProvider />
            <ScrollToTop />
            <GoogleAnalyticsProvider />
            <CookieConsentBanner />
            {/* Suspense fallback prevents React holding the full subtree in memory while suspended */}
            <Suspense fallback={<div style={{ visibility: 'hidden' }} />}>
              <SmoothScrollProvider>
                <NavbarServer />
                {children}
                <Footer />
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}