"use client"; // This must be at the top of the file

import '../../styles/globals.css';
import local from 'next/font/local';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Head from '../head';
import FlareCursor from '@/components/ui/FlareCursor';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('vibrant-dark');
    } else {
      document.documentElement.classList.add('vibrant-light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');

      if (newMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('vibrant-light');
        document.documentElement.classList.add('vibrant-dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('vibrant-light');
      }

      return newMode;
    });
  };

  return (
    <html
      lang='en'
      className={`text-black bg-white dark:text-white dark:bg-black ${graphik.variable}`}
    >
      <Head />

      <body className='transition ease-in-out duration-300 bg-vibrant-light dark:bg-vibrant-dark'>
        <Header />

        <main className='flex flex-col justify-center items-center mx-auto'>
          <FlareCursor />
          {children}
        </main>

        <Footer />

        {/* Floating button for theme toggle */}
        <div className="floating-button fixed bottom-5 right-5 z-50">
          <button
            onClick={toggleTheme}
            className="p-3 bg-gray-200 rounded-full shadow-lg transition-all hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </button>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
