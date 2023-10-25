import { Metadata } from 'next';
import { ReactNode } from 'react';

const title = 'JB - Awesome Portfolio Built with Next.js | About Page';

export const metadata: Metadata = {
  title: title,
  description:
    'Learn more about Jerald Baroro, a Next.js developer with passion for  creating innovative solutions. Discover tips for building a developer portfolio and insights on   full-stack development, front-end development, and back-end development.',
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
      'Learn more about Jerald Baroro, a Next.js developer with passion for  creating innovative solutions. Discover tips for building a developer portfolio and insights on   full-stack development, front-end development, and back-end development.'
  }
};

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default AboutLayout;
