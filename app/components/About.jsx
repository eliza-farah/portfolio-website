import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='dark:bg-gray-900 dark:text-gray-100 w-full px-5 sm:px-[12%] py-16 scroll-mt-20 bg-white lg:mt-20' id='about'>
      {/* Section Header */}
      <div className='text-center mb-12'>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-lg font-medium mb-2 block dark:text-gray-400'>Introduction</motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100'>
          About Me
        </motion.h2>
        <div className='w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto'>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='relative group w-80 lg:w-[400px] flex-shrink-0'>
          <div className='absolute -inset-2  rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-500'></div>
          <Image
            src={assets.user_image}
            alt='Profile picture'
            width={400}
            height={400}
            className='relative w-full h-full rounded-full border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover'
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed'>
            I am an experienced <span className='font-semibold text-gray-800 dark:text-gray-100'>Frontend Developer</span> with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className='border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300'
                key={index}
              >
                <div className='w-12 h-12 flex items-center justify-center bg-purple-400 dark:bg-purple-900 rounded-lg mb-4'>
                  <Image
                    src={iconDark || icon}
                    alt={title}
                    width={28}
                    height={28}
                    className='w-7 h-7'
                  />
                </div>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2'>{title}</h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className='my-6 text-gray-700 dark:text-gray-300'>Tools I use</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1 }}
                key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:shadow-lg hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300'>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
