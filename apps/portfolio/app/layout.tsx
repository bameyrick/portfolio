import Footer from '@/components/footer';
import Header from '@/components/header/header';
import MetaTheme from '@/lib/meta-theme';
import { StyledComponentsRegistry } from '@/lib/registry';
import NextThemeProvider from '@/lib/theme-provider';
import GlobalStyles from '@/styles/global-styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ben Meyrick | Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#db1f2f" />
        <meta name="apple-mobile-web-app-title" content="Ben Meyrick" />
        <meta name="application-name" content="Ben Meyrick" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <>
            <NextThemeProvider>
              <MetaTheme />
              <GlobalStyles />

              <Header />

              <main>{children}</main>

              <Footer />
            </NextThemeProvider>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
