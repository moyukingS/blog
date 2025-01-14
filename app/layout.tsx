import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'crychic',
  description: '要组一辈子的乐队吗？',
};
import { Assistant } from 'next/font/google';

const assistant = Assistant({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={assistant.className}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
