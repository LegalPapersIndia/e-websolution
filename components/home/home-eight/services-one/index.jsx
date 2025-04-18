import React from "react";
import ServiceCard from "./ServiceCard";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import Icon1 from "@/public/images/v8/web.png";
import Icon2 from "@/public/images/v8/digital.png";
import Icon3 from "@/public/images/v8/ads.png";

const services = [
  {
    title: "Register your company",
    price: "₹999",
    icon: Icon1,
    items: [
      "Private Limited company",
      "Limited Liability Partnership",
      "One Person company",
      "Partnership Firm",
      "Sole Proprietorship",
    ],
  },
  {
    title: "File GST",
    price: "₹399",
    icon: Icon2,
    items: [
      "GST Registration",
      "GST Filing",
      "GST Cancellation and Revocation",
      "Reply to GST Notice",
      "Indirect Tax",
    ],
  },
  {
    title: "Protect your Intellectual Property",
    price: "₹1499",
    icon: Icon3,
    items: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Registration",
      "Trademark Objection",
      "Trademark Infringement",
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
