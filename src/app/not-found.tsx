import Link from 'next/link';
import AnimatedText from './components/AnimatedText';
import Layout from './components/Layout';
import TransitionEffect from './components/TransitionEffect';
import { Metadata } from 'next';

const title = 'JB - Awesome Portfolio Built with Next.js | 404';

export const metadata: Metadata = {
  title: title,
  description:
    "Hey Buddy, I'm glad you visited my portfolio website! You can learn more about me. Unfortunately, you reached a page that is not found in my directory. Please track back to links that belong to my website. Thank you!",
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
      "Hey Buddy, I'm glad you visited my portfolio website! You can learn more about me. Unfortunately, you reached a page that is not found in my directory. Please track back to links that belong to my website. Thank you!"
  }
};

const NotFound = () => {
  return (
    <>
      <TransitionEffect />
      <main className='h-[75vh] w-full dark:bg-dark '>
        <Layout className='relative !bg-transparent !pt-16 flex flex-col items-center justify-center'>
          <AnimatedText text='404' className=' ' />
          <AnimatedText text='Page Not Found.' className=' !text-7xl ' />
          <Link
            href='/'
            className='self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        '
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
