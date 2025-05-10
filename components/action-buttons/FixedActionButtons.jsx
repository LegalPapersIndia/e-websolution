"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './FixedActionButtons.css';

const FixedActionButtons = () => {
  const [showForm, setShowForm] = useState(false);

  const whatsappNumber = '919876543210'; // Change to your number
  const message = 'Hi, I am reaching out to you through E-websolution.in. I want to know more about the services.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="fixed-buttons">
        <button className="action-btn whatsapp-btn" onClick={openWhatsApp}>
          <FaWhatsapp className="icon whatsapp-icon" />
          <span>WhatsApp</span>
        </button>

        <button className="action-btn quote-btn" onClick={() => setShowForm(true)}>
          <FaEnvelope className="icon google-form-icon" />
          <span>Get a Quote</span>
        </button>
      </div>

      {/* Google Form Modal */}
      {showForm && (
        <div className="form-modal">
          <div className="form-container">
            <button className="close-btn" onClick={() => setShowForm(false)}>&times;</button>
            <iframe
              src="https://forms.gle/yvbfhLV9YUH31iPK8"
              width="100%"
              height="500"
              frameBorder="0"
              title="Get a Quote Form"
              allowFullScreen
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedActionButtons;
