// import Link from "next/link";
// import FadeInStagger from "../../../animation/FadeInStagger";
// import BlogCard from "./BlogCard";

// import Image1 from "@/public/images/v9/thumb4v9.png";
// import Image2 from "@/public/images/v9/thumb5v9.png";
// import Image3 from "@/public/images/v9/thumb6v9.png";

// const blogsData = [
// 	{
// 		id: 1,
// 		image: Image1,
// 		title: "Craft to compelling subject lines that get your emails",
// 		description: "Ensure most important words are at the beginning. 5-9 words around",
// 		category: "Growth",
// 		date: "10 July 2024",
// 	},
// 	{
// 		id: 2,
// 		image: Image2,
// 		title: "Designing to effective emails that stand out in a crowded",
// 		description: "Make your content to more readable and a less cluttere",
// 		category: "Email",
// 		date: "10 July 2024",
// 	},
// 	{
// 		id: 3,
// 		image: Image3,
// 		title: "Avoidingthe spam folder the best practices for email",
// 		description: "Confirm subscriptions with a double opt-in process to ensure th",
// 		category: "Email",
// 		date: "10 July 2024",
// 	},
// ];

// function Blogs() {
// 	return (
// 		<section className="section sofax-section-padding" id="blog">
// 			<div className="container">
// 				<div className="sofax-section-title">
// 					<div className="row">
// 						<div className="col-xl-7 col-lg-8">
// 							<div className="tg-heading-subheading animation-style3">
// 								<h2>Browse our articles on marketing and growth</h2>
// 							</div>
// 						</div>
// 						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
// 							<div className="sofax-title-btn wow fadeInUpX">
// 								<Link className="sofax-default-btn pill" data-text="View All Articles" href="/service">
// 									<span className="button-wraper">View All Articles</span>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="row">
// 					{blogsData.map((blog, index) => (
// 						<FadeInStagger key={blog.id} index={index} className="col-lg-4">
// 							<BlogCard blog={blog} />
// 						</FadeInStagger>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default Blogs;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BlogCard from "./BlogCard";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";

const swiperSettings = {
  speed: 15000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  loop: true,
  allowTouchMove: true,
  modules: [Autoplay],
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

function LatestUpdatesSlider() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const res = await fetch("/api/latest-news");
        const data = await res.json();
        setUpdates(data);
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <section className="sofax-slider-section sofax-section-padding7" id="blog" >
      <div className="container">
        <div className="sofax-title-section">
          <h2>
            <TextSplitFadeIn> Latest Updates in Web & Tech </TextSplitFadeIn>
          </h2>
        </div>
        <div className="sofax-brand-slider theme-bg">
          <Swiper {...swiperSettings}>
            {updates.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="sofax-logo-icon-item">
                  <BlogCard
                    blog={{
                      image: item.image || "public/images/v9/thumb4v9.png",
                      title: item.title,
                      description: item.description,
                      category: item.source,
                      link : item.link,
                      date: new Date(item.date).toLocaleDateString(),
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LatestUpdatesSlider;
