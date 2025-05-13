'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SideBanner.module.css';

const banners = [
  {
    image: '/images/slider/website-side-image.jpg',
    title: 'Website Design',
  },
  {
    image: '/images/slider/digital-side-image.jpg',
    title: 'Seo Marketing',
  },
  {
    image: '/images/slider/brand-side-image.jpg',
    title: 'Promotion Ads',
  },
];

const SideBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sideBannerBox}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.bannerItem}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img src={banners[index].image} alt={banners[index].title} className={styles.bannerImage} />
          <h3 className={styles.bannerTitle}>{banners[index].title}</h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SideBanner;
