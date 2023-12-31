'use client';

import Layout from '@/app/components/Layout';
import Image from 'next/image';
import profile from '../../../public/images/profile/developer-2.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimatedText from '@/app/components/AnimatedText';
import TransitionEffect from '@/app/components/TransitionEffect';
import Skills from '../components/Skill';
import Experience from '../components/Experience';
import Education from '../components/Education';

const AnimatedNumberFramerMotion = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
};

export default function About() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose!'
            className='mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div
              className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
              md:col-span-8'
            >
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                BIOGRAPHY
              </h2>
              <p className='font-medium '>
                Hello, I&apos;m <strong>Jerald Baroro</strong>, a dedicated
                full-stack web developer and software engineer architect, with 4
                years of hands-on experience in crafting beautiful, functional,
                and user-centered digital experiences. My passion lies in
                transforming visions into immersive online realities.
              </p>
              <p className='my-4 font-medium'>
                In my journey, I&apos;ve honed my skills as a full-stack web
                developer, ensuring seamless user interactions on websites and
                various digital platforms. My expertise encompasses a deep
                understanding of design principles, enabling me to deliver not
                just visually appealing but highly functional solutions.
              </p>
              <p className='font-medium'>
                I eagerly anticipate the opportunity to collaborate with you on
                your next project. By combining my years of experience, passion
                for innovative solutions, and commitment to user-centric design,
                I&apos;m ready to turn your ideas into exceptional digital
                experiences. Let&apos;s embark on this journey together, where
                creativity meets functionality, and bring your digital visions
                to life.
              </p>
            </div>
            <div
              className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
              bg-light p-8 dark:border-light dark:bg-dark
              xl:col-span-4 md:col-span-8 md:order-1
              '
            >
              <div
                className='absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                  bg-dark
          dark:bg-light  '
              />
              <Image
                className='h-auto w-full rounded-2xl'
                src={profile}
                alt='Jerald Baroro'
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
                priority
              />
            </div>
            <div
              className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
              xl:items-center md:order-3'
            >
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={40} />+
                </span>
                <h2
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                  xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  satisfied clients
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                  xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumberFramerMotion value={4} />+
                </span>
                <h2
                  className='mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                  xl:text-center md:text-lg sm:text-base xs:text-sm'
                >
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
