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
      <div className="container topbar-inner">
        <div className="topbar-left">
          <Link href="tel:+919354305099">
            <span className="topbar-item topbar-item-phone">
              <FaPhoneAlt size={14} />
              <span className="topbar-text">+919354305099</span>
            </span>
          </Link>
          <Link href="mailto:info@e-websolution.in">
            <span className="topbar-item">
              <FaEnvelope size={14} />
              <span className="topbar-text">info@e-websolution.in</span>
            </span>
          </Link>
        </div>
        <div className="topbar-right">
          <Link href="https://www.facebook.com/ewebsolution.in/" target="_blank"><FaFacebookF size={14} /></Link>
          <Link href="https://www.instagram.com/ewebsolution.in/" target="_blank"><FaInstagram size={15} /></Link>
          <Link href="#"><FaLinkedinIn size={14} /></Link>
          <Link href="#"><FaTwitter size={14} /></Link>
          <Link href="#"><FaYoutube size={15} /></Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
