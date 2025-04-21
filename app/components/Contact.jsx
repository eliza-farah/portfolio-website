import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "motion/react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e1534ef-ccf8-41b1-b27c-e12fb857c65d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <motion.div
        id='contact'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-center mb-12'
        >
          <span className='text-lg font-medium mb-2 block dark:text-gray-400'>Connect with me</span>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100'>
            Get in touch.
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full'></div>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 dark:text-gray-300'>
            I'd love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={onSubmit} className='max-w-2xl mx-auto'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-700
            rounded-md bg-white dark:bg-gray-800 dark:text-gray-300'
              type="text" placeholder='Enter your name'
              name='name'
              required />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-700
            rounded-md bg-white dark:bg-gray-800 dark:text-gray-300'
              type="email" placeholder='Enter your email'
              name='email'
              required />
          </div>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            rows='6' placeholder='Enter your message' name='message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-700
          rounded-md bg-white dark:bg-gray-800 dark:text-gray-300 mb-6'
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className='py-3 px-8 w-max flex items-center cursor-pointer justify-between gap-2 bg-black/80 dark:bg-gray-700 text-white rounded-full mx-auto hover:bg-black dark:hover:bg-gray-600 duration-500'
            type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </motion.button>

          <p className='mt-4'>{result}</p>
        </motion.form>

      </motion.div>
    </>
  );
};

export default Contact;
