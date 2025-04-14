import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="sofax-topbar-section">
      <div className="container d-flex justify-content-between align-items-center py-2 text-white">
        <div className="d-flex align-items-center gap-4">
          <span className="d-flex align-items-center gap-2">
            <FaPhoneAlt size={12} /> +91 98765 43210
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaEnvelope size={12} /> info@yourcompany.com
          </span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link href="#"><FaFacebookF size={14} /></Link>
          <Link href="#"><FaTwitter size={14} /></Link>
          <Link href="#"><FaLinkedinIn size={14} /></Link>
          <Link href="#"><FaInstagram size={15} /></Link>
          <Link href="#"><FaYoutube size={15} /></Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
