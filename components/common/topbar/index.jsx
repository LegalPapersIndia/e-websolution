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
          <Link href="#">
            <span className="topbar-item">
              <FaPhoneAlt size={12} />
              <span className="topbar-text">+91 98765 43210</span>
            </span>
          </Link>
          <Link href="#">
            <span className="topbar-item">
              <FaEnvelope size={12} />
              <span className="topbar-text">info@e-websolution.in</span>
            </span>
          </Link>
        </div>
        <div className="topbar-right">
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
