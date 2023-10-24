'use client';

import Link from 'next/link';
import Layout from './Layout';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '
    >
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className='flex items-center lg:py-2'>
          Built with{' '}
          <span className='text-primary text-2xl px-1 dark:text-primaryDark'>
            &#9825;{' '}
          </span>{' '}
          by&nbsp;
          <Link
            href='https://jerald-io-react.vercel.app/'
            target='_blank'
            className='underline underline-offset-2'
          >
            jeraldDev
          </Link>
        </div>

        <Link
          href='https://jerald-io-react.vercel.app/contact'
          target='_blank'
          className='underline underline-offset-2'
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
