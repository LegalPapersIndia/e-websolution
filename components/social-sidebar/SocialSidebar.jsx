import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import './SocialSidebar.css';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    url: 'https://facebook.com',
    class: 'facebook',
    color: '#0466ff',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com',
    class: 'instagram-logo',
    color: '#E4405F',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://youtube.com',
    class: 'youtube',
    color: '#FF0000',
  },
  {
    name: 'X',
    icon: <FaXTwitter />,
    url: 'https://x.com',
    class: 'twitter',
    color: '#14171A',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    url: 'https://linkedin.com',
    class: 'linkedin',
    color: '#047ba5',
  },
];

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${link.class}`}
        >
          <span className="icon" style={{ color: link.color }}>
            {link.icon}
          </span>
          <span className="label">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;