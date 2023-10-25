import { Metadata } from 'next';
import { ReactNode } from 'react';

const title = 'JB - Awesome Portfolio Built with Next.js | Articles Page';

export const metadata: Metadata = {
  title: title,
  description:
    "Browse through Jerald's collection of software engineering articles and  tutorials on Next.js, React.js, web development, and more. Gain valuable insights and stay up-to-date with SEO tips for building an web applications.",
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
      "Browse through Jerald's collection of software engineering articles and  tutorials on Next.js, React.js, web development, and more. Gain valuable insights and stay up-to-date with SEO tips for building an web applications."
  }
};

const ArticlesLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default ArticlesLayout;
