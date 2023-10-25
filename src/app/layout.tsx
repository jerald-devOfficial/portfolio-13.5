import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import Client from './client';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

const title = 'JB - Awesome Portfolio Built with Next.js';

export const metadata: Metadata = {
  title: title,
  description:
    "Explore Jerald's Next.js developer portfolio and discover the latest web app projects and software engineering articles.",
  twitter: {
    images: {
      url: 'https://www.jeraldbaroro.xyz/images/logo.png',
      alt: "JB - Jerald Baroro's Next.js portfolio",
      type: 'image/png',
      width: 300,
      height: 300
    }
  },
  openGraph: {
    title: title,
    images: {
      url: 'https://www.jeraldbaroro.xyz/images/logo.png',
      alt: "JB - Jerald Baroro's Next.js portfolio",
      type: 'image/png',
      width: 300,
      height: 300
    },
    siteName: title,
    description:
      "Explore Jerald's Next.js developer portfolio and discover the latest web app projects and software engineering articles."
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
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
};

export default RootLayout;
