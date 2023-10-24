import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const Skill = ({
  name,
  x,
  y
}: {
  name: string;
  x: number | string;
  y: number | string;
}) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className='cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       '
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div
        ref={ref}
        className='w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      '
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        '
        >
          Web
        </motion.div>

        <Skill name='HTML5' x='-8vw' y='4vw' />
        <Skill name='JavaScript' x='8vw' y='4vw' />
        <Skill name='CSS3' x='0vw' y='-8vw' />
        <Skill name='NextJS' x='-12vw' y='-6vw' />
        <Skill name='ReactJS' x='12vw' y='-6vw' />
        <Skill name='Mithril.js' x='0vw' y='12vw' />
        <Skill name='NoSQL' x='-10vw' y='-14vw' />
        <Skill name='MongoDB' x='19vw' y='0vw' />
        <Skill name='Firebase' x='-10vw' y='14vw' />
        <Skill name='Tawilwind CSS' x='10vw' y='-18vw' />
        <Skill name='SCSS' x='-22vw' y='6vw' />
        <Skill name='Material UI' x='18vw' y='13vw' />
        <Skill name='Github' x='27vw' y='6vw' />
        <Skill name='Bitbucket' x='-28vw' y='-5vw' />
        <Skill name='VSCode' x='0vw' y='28vw' />
        <Skill name='AWS' x='-23vw' y='-20vw' />
        <Skill name='MERN Stack' x='33vw' y='-6vw' />
        <Skill name='Vercel' x='-8vw' y='-23vw' />
        <Skill name='Netlify' x='23vw' y='-14vw' />
        <Skill name='Figma' x='-18vw' y='18vw' />
        <Skill name='Adobe Photoshop' x='10vw' y='22vw' />
        <Skill name='Linux' x='31vw' y='18vw' />
        <Skill name='Windows 11' x='13vw' y='-30vw' />
        <Skill name='MacOS' x='-34vw' y='14vw' />
        <Skill name='Chess' x='35vw' y='-20vw' />
      </div>
    </>
  );
};

export default Skills;
