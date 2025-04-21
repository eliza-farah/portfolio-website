import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-5 sm:px-[12%] py-16 scroll-mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="work"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-12"
      >
        <span className="text-lg font-medium mb-2 block dark:text-gray-400">My portfolio</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">My latest work</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Work Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image with Overlay */}
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-black/90 dark:via-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></motion.div>

            {/* Project Info Card */}
            <motion.div
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="absolute bottom-3 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm m-4 p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                </div>
                <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <Image
                    src={assets.send_icon}
                    alt="View project"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-full py-3 px-8 mx-auto my-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
          className="w-4 h-4 hover:translate-x-1 transition-transform duration-300"
        />
      </motion.a>
    </motion.section>
  )
}

export default Work
