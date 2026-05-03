import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import NavbarServer from '@/components/shared/navbar/NavbarServer';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import ScrollToTop from '@/components/shared/scroll-to-top/ScrollToTop';
import PostHogProvider from '@/components/shared/PostHogProvider';
import ClarityProvider from '@/components/shared/ClarityProvider';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`} suppressHydrationWarning>
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <ClarityProvider />
            <ScrollToTop />
            <Suspense>
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