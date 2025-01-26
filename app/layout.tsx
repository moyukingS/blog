import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Assistant } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ScrollProvider } from '@/components/theme/scroll-provider';

const assistant = Assistant({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'crychic',
  description: '要组一辈子的乐队吗？',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={assistant.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProvider>
            <Header />
            {children}
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
