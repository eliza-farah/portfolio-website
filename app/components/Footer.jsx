import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-center'
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt='Logo'
          className='w-36 mx-auto mb-2'
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='w-max flex items-center gap-2 mx-auto'
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='Mail Icon'
            className='w-6'
          />
          thiri6812@gmail.com
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'
      >
        <p>© 2025 Thiri. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          {['GitHub', 'Linkedin', 'GitHub'].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: isDarkMode ? '#fff' : '#000' }}
              className='transition-all duration-300'
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href="https://github.com/eliza-farah"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
