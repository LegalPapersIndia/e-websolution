"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import Icon from "@/public/images/v5/icon5.png";
import SearchIcon from "@/public/images/blog/search-icon.png";
import portfolioData from "./portfolioData";

const categories = ["All Industry", "Agriculture", "Pharmaceuticals", "Fashion", "Furniture", "Food", "Fabrication", "Spices" , "Chemicals"];

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
    <div className="section sofax-section-padding7" ref={portfolioRef} id="portfolio">
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



