import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"

const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto h-[90vh] flex flex-col items-center justify-center px-6 pt-20 pb-8 lg:pt-10 dark:bg-gray-900">
      {/* Profile Image with Glow Effect */}
      <motion.div 
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      className="relative group mb-6">
        <div className="absolute -inset-1.5 bg-gradient-to-r rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500 animate-tilt"></div>
        <Image
          src={assets.profile_img}
          alt="William Mark"
          width={130}
          height={130}
          priority
          className="relative rounded-full w-30 h-30 object-cover border-3 border-white dark:border-gray-800 shadow-md group-hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Greeting with Waving Hand */}
      <div className="flex items-center gap-2 mb-4 animate-fade-in">
        <motion.h3
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 0.3}}
        className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
          Hi! I'm William Mark
        </motion.h3>
        <Image
          src={assets.hand_icon}
          alt="waving hand"
          width={28}
          height={28}
          className="w-7 h-7 animate-wave origin-bottom dark:invert-[0.8]"
        />
      </div>

      {/* Main Headline */}
      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration: 0.8, delay: 0.5}}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-5 leading-tight max-w-3xl">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Frontend Web Developer
        </span>{' '}
        based in India.
      </motion.h1>

      {/* Description */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.6, delay: 0.7}}
      className="text-base text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-8 leading-relaxed">
        I craft exceptional digital experiences with 10 years of expertise at
        <span className="font-semibold text-gray-800 dark:text-gray-100"> Microsoft</span>,{' '}
        <span className="font-semibold text-gray-800 dark:text-gray-100"> Tesla</span>, and{' '}
        <span className="font-semibold text-gray-800 dark:text-gray-100"> Apple</span>.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1}}
          href="#contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 hover:shadow-md hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-300 text-sm dark:from-purple-700 dark:to-pink-700 dark:hover:shadow-purple-600/30"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={14}
            height={14}
            className="w-3.5 h-3.5"
          />
        </motion.a>

        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1.2}}
          href="/sample-resume.pdf"
          download
          className="px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-600 font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 text-sm dark:text-gray-300"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            width={14}
            height={14}
            className="w-3.5 h-3.5 dark:invert-[0.8]"
          />
        </motion.a>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(0.8deg); }
          50% { transform: rotate(-0.8deg); }
          75% { transform: rotate(0.8deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 1s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-tilt {
          animation: tilt 6s infinite linear;
        }
      `}</style>
    </header>
  );
};

export default Header;