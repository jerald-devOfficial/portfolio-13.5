'use client';

import { motion, useMotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import blog1 from '../../../public/images/articles/getting started.png';
import blog2 from '../../../public/images/articles/how to fully access myshoppe pos in c.png';
import blog3 from '../../../public/images/articles/setup react with tailwindcss.png';

import Link from 'next/link';
import { useRef, MouseEvent, FC } from 'react';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import TransitionEffect from '../components/TransitionEffect';

const FramerImage = motion(Image);

interface MovingImgProps {
  img: StaticImageData;
  title: string;
  link: string;
}

interface ArticleProps extends MovingImgProps {
  date: string;
}

interface FeaturedArticleProps extends MovingImgProps {
  summary: string;
  time: string;
}

const MovingImg = ({ title, img, link }: MovingImgProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLElement | SVGElement | null>(null);

  const handleMouse = (event: MouseEvent<HTMLAnchorElement>) => {
    imgRef.current!.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    imgRef.current!.style.display = 'none';
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <Link
        href={link}
        target={'_blank'}
        className='relative'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className='capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base'>
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className='w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y
          }}
          sizes='(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw'
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      '
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className='text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm'
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link
}: FeaturedArticleProps) => {
  return (
    <li
      className='relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light'
    >
      <div
        className='absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  '
      />
      <Link
        href={link}
        target={'_blank'}
        className='inline-block rounded-lg overflow-hidden w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes='100vw'
          priority
        />
      </Link>

      <Link href={link} target={'_blank'}>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>
          {title}
        </h2>
      </Link>
      <p className='text-sm  mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>
        {time}
      </span>
    </li>
  );
};

const Articles: FC = () => {
  return (
    <>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className='pt-16'>
          <AnimatedText
            text='Words Can Change the World!'
            className='!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />

          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
            <FeaturedArticle
              img={blog1}
              title='getting started'
              time='3 min read'
              summary='Discover how I get started with my journey as a full-stack software engineer.'
              link='https://jerald-io-react.vercel.app/insights/Getting-Started'
            />

            <FeaturedArticle
              img={blog2}
              title='how to fully access myShoppe POS in c'
              time='4 min read'
              summary='Learn how to access and fully run my created C program called MyShoppe POS when you download it on Windows OS.'
              link='https://jerald-io-react.vercel.app/programming/How-to-Fully-Access-MyShoppe-POS-in-C'
            />
          </ul>

          <h2 className='font-bold text-4xl w-full text-center mt-32 my-16'>
            All Articles
          </h2>

          <ul className='flex flex-col items-center relative'>
            <Article
              title='guide to complete tailwindCSS and react setup'
              img={blog3}
              date='February 2, 2021'
              link='https://jerald-io-react.vercel.app/programming/Guide-to-Complete-TailwindCSS-and-React-Setup'
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
