"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import Icon from "@/public/images/v5/icon5.png";
import SearchIcon from "@/public/images/blog/search-icon.png";
import portfolioData from "./portfolioData";

const categories = ["All Industry", "Agriculture", "Pharmaceuticals", "Fashion", "Furniture", "Food", "Fabrication"];

function PortfolioFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All Industry");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const portfolioRef = useRef(null);

  const filteredData = portfolioData.filter((item) => {
    const matchCategory = selectedCategory === "All Industry" || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const visibleData = filteredData.slice(0, visibleCount);

  const handleClear = () => {
    setSelectedCategory("All Industry");
    setSearchTerm("");
    setVisibleCount(6);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleViewLess = () => {
    setVisibleCount(6);
    if (portfolioRef.current) {
      window.scrollTo({
        top: portfolioRef.current.offsetTop - 100, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="section sofax-section-padding7" ref={portfolioRef}>
      <div className="container">
        <div className="sofax-section-title center pb-50">
          <div className="tg-heading-subheading animation-style3">
            <h2>
              <TextSplitFadeIn>Filter Portfolio By Industry</TextSplitFadeIn>
            </h2>
          </div>
        </div>

        <div className="portfolio-filter-wrapper mb-4">
          <div className="filter-controls">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setVisibleCount(6);
              }}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="form-control ps-5"
              placeholder="🔍 Search by title..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(6);
              }}
            />
          </div>
          <div className="clear-filter-button w-20">
            <button className="clear-filter-btn w-100 h-100" onClick={handleClear}>
              Clear Filters
            </button>
          </div>
        </div>

        <div className="row">
          <AnimatePresence>
            {visibleData.map((item) => (
              <motion.div
                key={item.id}
                className="col-md-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="sofax-portfolio-content-wrap">
                  <div className="sofax-portfolio-thumb">
                    <Link href={item.link} target="_blank">
                      <Image src={item.image} alt={item.title} />
                    </Link>
                  </div>
                  <Link href={item.link} target="_blank">
                    <div className="sofax-portfolio-author-wrap">
                      <div className="sofax-portfolio-author-data">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="sofax-portfolio-author-icon">
                        <Image src={Icon} alt="Icon" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length > 6 && (
          <div className="text-center mt-4">
            {visibleCount < filteredData.length ? (
              <button className="view-more-btn" onClick={handleViewMore}>
                View More
              </button>
            ) : (
              <button className="view-more-btn" onClick={handleViewLess}>
                View Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioFilter;



// 'use client';
// import React, { useState } from 'react';
// import { portfolioItems } from './portfolioData';
// import { motion, AnimatePresence } from 'framer-motion';

// const PortfolioFilter = () => {
//   const [industry, setIndustry] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const uniqueIndustries = [...new Set(portfolioItems.map(item => item.industry))];

//   const handleClear = () => {
//     setIndustry('');
//     setSearchTerm('');
//   };

//   const filteredItems = portfolioItems.filter(item => {
//     const matchesIndustry = industry ? item.industry === industry : true;
//     const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesIndustry && matchesSearch;
//   });

//   return (
//     <section className="py-5 bg-light">
//       <div className="container">
//         <motion.h2
//           className="text-center mb-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           Filter Portfolio By Industry
//         </motion.h2>

//         <motion.div
//           className="card shadow-sm mb-5 p-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="portfolio-filter-wrapper">
//             <div className="filter-controls">
//               <select
//                 className="form-select"
//                 value={industry}
//                 onChange={(e) => setIndustry(e.target.value)}
//               >
//                 <option value="">All Industries</option>
//                 {uniqueIndustries.map((ind) => (
//                   <option key={ind} value={ind}>{ind}</option>
//                 ))}
//               </select>

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search by project title..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="clear-filter-button">
//               <button className="clear-filter-btn w-100" onClick={handleClear}>
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         </motion.div>

//         <div className="row">
//           <AnimatePresence>
//             {filteredItems.length > 0 ? (
//               filteredItems.map(item => (
//                 <motion.div
//                   key={item.id}
//                   className="col-md-4 mb-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <div className="card h-100 shadow-sm">
//                     <img
//                       src={item.image}
//                       className="card-img-top img-fluid"
//                       alt={item.title}
//                       style={{ height: '200px', objectFit: 'contain' }}
//                     />
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{item.title}</h5>
//                       <p className="text-muted">{item.industry}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             ) : (
//               <motion.div
//                 className="text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//               >
//                 No portfolio items found.
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioFilter;