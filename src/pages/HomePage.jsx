import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import RuningCampaign from '../components/RuningCampaign';

const HomePage = () => {
  // State to manage theme
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply the theme class to the document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle theme handler
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Theme Toggle Button */}
      <div className="p-4  bg-gray-200 dark:bg-gray-800 text-right ">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Content */}
      <Banner />
      <RuningCampaign />

      {/* Extra Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Section 1: Why Choose Us */}
          <section className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-red-500 inline-block mb-4">
              Why Choose Crowdcube?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              At Crowdcube, we believe in empowering innovators and dreamers to turn their ideas into reality. Our platform offers:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>Seamless crowdfunding for personal, creative, or startup projects.</li>
              <li>A trusted network of supporters and backers.</li>
              <li>Transparency and secure transactions.</li>
            </ul>
          </section>

          {/* Section 2: Testimonials */}
          <section className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 border-b-2 border-red-500 inline-block mb-4">
              What Our Users Say
            </h2>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
              <SwiperSlide>
                {/* Testimonial 1 */}
                <div className="md:flex items-center justify-center md:items-start md:space-x-3">
                  <img
                    src="https://i.ibb.co/ncDz0Y2/th.jpg"
                    alt="User 1"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-semibold">
                      "Crowdcube helped me fund my dream project! The platform is easy to use and very effective."
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">- Jane Doe, Filmmaker</p>
                  </div>
                </div>
              </SwiperSlide>
              {/* Additional testimonials... */}
            </Swiper>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
