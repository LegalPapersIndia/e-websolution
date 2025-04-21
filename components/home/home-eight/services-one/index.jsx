import React from "react";
import ServiceCard from "./ServiceCard";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import Icon1 from "@/public/images/v8/web.png";
import Icon2 from "@/public/images/v8/digital.png";
import Icon3 from "@/public/images/v8/ads.png";

const services = [
  {
    title: "Website Design & Development",
    price: "₹5999",
    icon: Icon1,
    items: [
      "Web Design",
      "Small Business Website",
      "Large Business Website",
      "Dynamic Website",
      "Customize Website",
      "E-commerce Website",
      "Industry Specific Website",
    ],
  },
  {
    title: "Digital Markrting",
    price: "₹5999",
    icon: Icon2,
    items: [
      "SEO Marketing",
      "SMO Marketing",
      "Google Marketing Platform",
      "Whatsapp Marketing",
      "Email Marketing",
      "Content Marketing",
    ],
  },
  {
    title: "Promotion & Advertisement",
    price: "₹5999",
    icon: Icon3,
    items: [
      "Google Ads",
      "Meta Ads",
      "TV Ads",
      "Brand Promotion",
      "Social Media Promotion",
      "Paid PR",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5 bg-light">
      <div className="container">
        <div className="mt-5 sofax-section-title center">
            <div className="tg-heading-subheading animation-style3">
                <h2>
                    <TextSplitFadeIn> Our Best Services </TextSplitFadeIn>
                </h2>
            </div>
        </div>
        <div className="row g-4 justify-content-center">
        {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 position-relative" key={index}>
                <ServiceCard {...service} isLast={index === services.length - 1} />
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
