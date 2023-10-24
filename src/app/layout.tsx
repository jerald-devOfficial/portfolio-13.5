import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import Client from './client';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ReactNode } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata: Metadata = {
  title: 'JB - Awesome Portfolio Built with Next.js',
  description:
    "Explore Jerald's Next.js developer portfolio and discover the latest web app projects and software engineering articles."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <NavBar />
          <Client>{children}</Client>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
