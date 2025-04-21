import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', hash: '#header' },
    { name: 'About me', hash: '#about' },
    { name: 'Services', hash: '#services' },
    { name: 'My work', hash: '#work' },
    { name: 'Contact me', hash: '#contact' }
  ]

  return (
    <>
      {/* Background Image - Hidden in dark mode */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image
          src={assets.header_bg_color}
          alt='header background'
          width={1200}
          height={160}
          className='w-full h-full object-cover'
          priority
        />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm dark:shadow-gray-700/20'
          : 'bg-transparent'
        }`}>
        {/* Logo */}
        <a href="#header">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt='Website logo'
            width={112} // Desired width
            height={40} // Matching aspect ratio height
            className='cursor-pointer hover:opacity-80 transition-opacity w-auto h-auto'
            priority
          />

        </a>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex items-center gap-1 lg:gap-3 rounded-full px-8 py-2 transition-all ${isScrolled
            ? 'bg-white/90 dark:bg-gray-800/90 shadow-sm border border-gray-200 dark:border-gray-700'
            : 'bg-white/70 dark:bg-gray-800/70'
          }`}>
          {navItems.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white'
                    : 'text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white'
                  } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Items */}
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? 'Light mode icon' : 'Dark mode icon'}
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </button>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${isScrolled
                ? 'border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                : 'border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
              }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt='Contact arrow icon'
              width={12}
              height={12}
              className='w-3 h-3'
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
            onClick={openMenu}
            aria-label='Toggle menu'
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt='Mobile menu icon'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-800 transition-transform duration-500'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt='Close menu icon'
              width={20}
              height={20}
              className='w-5 cursor-pointer'
            />
          </div>

          {navItems.map((item) => (
            <li key={item.hash}>
              <a
                href={item.hash}
                className='block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-rose-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='h-16'></div>
    </>
  )
}

export default Navbar