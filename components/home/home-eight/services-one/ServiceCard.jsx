"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ServiceCard = ({ title, price, icon, items, isLast }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="card h-100 shadow-sm rounded-4 p-3">
      <h5 className="fw-bold mb-1">{title}</h5>
      <p className="text-muted mb-3">Starting from <strong>{price}/-</strong></p>
      <Image
        src={icon}
        alt={`${title} Icon`}
        width={75}
        height={75}
        className="mb-3"
      />
      <ul className="list-unstyled">
        {items.map((item, i) => (
          <li
            key={i}
            className="service-list-item position-relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="d-flex justify-content-between align-items-center">
              {item}
              <FaAngleRight size={12} />
            </span>

            {hoveredIndex === i && (
              <div className={`floating-dropdowns d-flex flex-column gap-2 ${isLast ? "left-align" : ""}`}>
                <Link href="/services/details" className="dropdown-box d-flex justify-content-between align-items-center" target="_blank">
                    Visit this Page <FiExternalLink size={14} />
                </Link>
                <Link href="/portfolio" className="dropdown-box d-flex justify-content-between align-items-center" target="_blank">
                    Projects/Portfolios <FiExternalLink size={14} />
                </Link>
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
