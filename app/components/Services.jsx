import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react"

const Services = () => {
  const services = [
    {
      icon: assets.web_icon,
      title: "Web Development",
      description: "Building responsive, high-performance websites with modern frameworks like React, Next.js, and Tailwind CSS."
    },
    {
      icon: assets.ui_icon,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences that drive engagement and conversions."
    },
    {
      icon: assets.mobile_icon,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native for consistent performance across devices."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-5 sm:px-[12%] py-16 scroll-mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="services"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12"
      >
        <span className="text-lg font-medium mb-2 block dark:text-gray-400">What I Offer</span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          My Services
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-500 dark:border-gray-700 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 flex items-center justify-center bg-purple-400 dark:bg-purple-900 rounded-lg mb-6 group-hover:bg-purple-300 dark:group-hover:bg-purple-800 transition-colors duration-300"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            <div className="flex items-center text-sm font-medium pt-5 transition-colors text-gray-900 dark:text-gray-100">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
