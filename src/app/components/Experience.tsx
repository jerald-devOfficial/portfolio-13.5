import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}{' '}
          <a
            className='capitalize text-primary dark:text-primaryDark'
            href={companyLink}
            target={'_blank'}
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='relative w-[75%] mx-auto lg:w-[90%] md:w-full'>
        <motion.div
          className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl'
          style={{ scaleY: scrollYProgress }}
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='Chief Technology Officer | Software Architect'
            company='WOOP Scholarship'
            companyLink='https://woopscholarship.com'
            time='Sep 2022 - Jul 2023'
            address='Pagadian City, Zamboanga Peninsula, PH'
            work='Provided mentorship and guidance to junior software engineers on technical issues and best
            practices.
            Collaborated with other departments such as Quality Assurance, Product Management,
            Designers. to ensure successful project delivery.
            Developed and implemented software solutions utilizing Next.js 13.4, TypeScript, TailwindCSS,
            Node.js, Express, MongoDB, Vercel, and AWS.
            '
          />

          <Details
            position='Web and Application Developer'
            company='DevOps Solutions'
            companyLink='https://hoody.com'
            time='Feb 2022 - Jul 2022'
            address='Cebu City'
            work='Co-developer of Hoody VPN application using MithrilJS, MobX and SCSS that runs on Tauri.
            Currently developing the Website blog of the application using NodeJS and Tailwindcss.'
          />

          <Details
            position='Software Engineer Analyst'
            company='Accenture'
            companyLink='https://www.accenture.com/ph-en'
            time='Sep 2021 - Aug 2022'
            address='IT Park, Cebu City'
            work='Frontend UI and API developer for a banking website using React JS, Typescript, Material UI, and
            .NET for one of the leading banks in Australia.'
          />

          <Details
            position='Full Stack Developer'
            company='Candid-I'
            companyLink='https://www.candid-i.com/'
            time='Apr 2021 - Nov 2021'
            address='Singapore'
            work='Main developer building a MVP recruiting web application through server-less stack with React JS
            and Firebase.'
          />

          <Details
            position='JavaScript Developer'
            company='Pantem Foundation'
            companyLink='https://www.panteum.io'
            time='Jan 2021 - Mar 2021'
            address='Cebu City'
            work='Creating and building a CSS Framework dynamically using Javascript, SASS/SCSS, PugJS, and
            NodeJS.'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
