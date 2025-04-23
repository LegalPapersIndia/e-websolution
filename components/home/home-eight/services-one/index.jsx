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
      { name: "Web Design", visitPageLink: "/services/web-development", portfolioLink: "/portfolio/web-design" },
      { name: "Small Business Website", visitPageLink: "/services/website/small-business-website", portfolioLink: "/portfolio/small-business-website" },
      { name: "Large Business Website", visitPageLink: "/services/website/large-business-website", portfolioLink: "/portfolio/large-business-website" },
      { name: "Dynamic Website", visitPageLink: "/services/website/dynamic-website", portfolioLink: "/portfolio/dynamic-website" },
      { name: "Customize Website", visitPageLink: "/services/website/customize-website", portfolioLink: "/portfolio/customize-website" },
      { name: "E-commerce Website", visitPageLink: "/services/website/ecommerce-website", portfolioLink: "/portfolio/ecommerce-website" },
      { name: "Industry Specific Website", visitPageLink: "/services/website/industry-specific-website", portfolioLink: "/portfolio/industry-specific-website" },
    ],
  },
  {
    title: "Digital Marketing & SEO",
    price: "₹5999",
    icon: Icon2,
    items: [
      { name: "SEO Marketing", visitPageLink: "/services/digital/seo-marketing", portfolioLink: "/portfolio/seo-marketing" },
      { name: "SMO Marketing", visitPageLink: "/services/digital/smo-marketing", portfolioLink: "/portfolio/smo-marketing" },
      { name: "Google Marketing Platform", visitPageLink: "/services/digital/google-marketing", portfolioLink: "/portfolio/google-marketing" },
      { name: "Whatsapp Marketing", visitPageLink: "/services/digital/whatsapp-marketing", portfolioLink: "/portfolio/whatsapp-marketing" },
      { name: "Email Marketing", visitPageLink: "/services/digital/email-marketing", portfolioLink: "/portfolio/email-marketing" },
      { name: "Content Marketing", visitPageLink: "/services/digital/content-marketing", portfolioLink: "/portfolio/content-marketing" },
    ],
  },
  {
    title: "Promotion & Advertisement",
    price: "₹5999",
    icon: Icon3,
    items: [
      { name: "Google Ads", visitPageLink: "/services/promotion/google-ads", portfolioLink: "/portfolio/google-ads" },
      { name: "Meta Ads", visitPageLink: "/services/promotion/meta-ads", portfolioLink: "/portfolio/meta-ads" },
      { name: "TV Ads", visitPageLink: "/services/promotion/tv-ads", portfolioLink: "/portfolio/tv-ads" },
      { name: "Brand Promotion", visitPageLink: "/services/promotion/brand-promotion", portfolioLink: "/portfolio/brand-promotion" },
      { name: "Social Media Promotion", visitPageLink: "/services/promotion/social-media-promotion", portfolioLink: "/portfolio/social-media-promotion" },
      { name: "Paid PR", visitPageLink: "/services/promotion/paid-pr", portfolioLink: "/portfolio/paid-pr" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section sofax-section-padding2 bg-light">
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
