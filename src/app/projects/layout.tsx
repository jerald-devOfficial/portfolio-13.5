import { Metadata } from 'next';
import { ReactNode } from 'react';

const title = 'JB - Awesome Portfolio Built with Next.js | Projects Page';

export const metadata: Metadata = {
  title: title,
  description:
    'Discover the latest web app projects created by Jerald, a Next.js developer with expertise in React.js, Next.js, and full-stack development. Browse software engineering articles and tutorials for tips on creating web applications.',
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
      'Discover the latest web app projects created by Jerald, a Next.js developer with expertise in React.js, Next.js, and full-stack development. Browse software engineering articles and tutorials for tips on creating web applications.'
  }
};

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default ProjectsLayout;
