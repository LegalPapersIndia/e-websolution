'use client';
import React, { useEffect, useState } from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

function LatestUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch('/api/latest-news');
        const data = await res.json();
        setUpdates(data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div className="bg-gray-900 text-white py-6 px-4 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <FaBullhorn className="text-yellow-400 text-xl" />
        <h2 className="text-xl font-semibold center">Latest Tech Updates</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {updates.map((update, index) => (
          <SwiperSlide key={index}>
            <a
              href={update.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all h-full"
            >
              <p className="font-medium mb-2">{update.title}</p>
              <small className="text-gray-400">
                {new Date(update.date).toLocaleDateString()}
              </small>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LatestUpdates;
