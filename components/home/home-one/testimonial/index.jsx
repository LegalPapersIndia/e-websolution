"use client";
import Thumb1Img from "@/public/images/v1/member1.png";
import Thumb2Img from "@/public/images/v1/member2.png";
import Thumb3Img from "@/public/images/v1/member3.png";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
//

const testimonialOneData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Their team redesigned our website beautifully and handled SEO — we saw traffic growth within the first month! The results speak for themselves.",
		author: "Rajesh Mehra",
		designation: "Industry: Electronics Retailer",
		img: Thumb1Img,
		date: "2024-09-10",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Highly recommend! They understood our business needs perfectly and delivered a clean, fast website with strong results.",
		author: "Neha Patil",
		designation: "Industry: Educational Consultancy",
		img: Thumb2Img,
		date: "2025-03-18",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"From website to SEO and ads, everything was smooth. Honest team, great communication, and solid performance throughout.",
		author: "Sameer Joshi",
		designation: "Industry: Fitness & Wellness Studio",
		img: Thumb3Img,
		date: "2025-02-07",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"We’re ranking on Google now! Their SEO work has been effective and totally worth the investment. Totally recommended.",
		author: "Vikram Shetty",
		designation: "Industry: Travel Agency",
		img: Thumb1Img,
		date: "2024-11-13",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Their branding and website design helped us stand out. Very creative team and excellent communication throughout!",
		author: "Aisha Sharma",
		designation: "Industry: Handmade Skincare Prdcts",
		img: Thumb2Img,
		date: "2024-02-15",
	},
];

const testimonialTwoData = [
	{
		id: crypto.randomUUID(),
		rating: 4,
		description:
			"Impressed by their ad strategy! We saw more leads and better conversions in just a few weeks.",
		author: "Deepak Malhotra",
		designation: "Industry: Fashion & Lifestyle Brand",
		img: Thumb1Img,
		date: "2024-03-10",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,

		description:
			"Their team managed everything — website, ads, social media. Super smooth experience and amazing support.",
		author: "Meena Iyer",
		designation: "Industry: Home Interior Design",
		img: Thumb2Img,
		date: "2024-03-10",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"Great results they built our website from scratch — clean, fast, and mobile-friendly. Very satisfied with the end result!",
		author: "Anjali Deshmukhn",
		designation: "Industry: Online Boutique",
		img: Thumb3Img,
		date: "2024-03-10",
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		description:
			"We started getting quality leads within weeks. Their ads and landing pages really worked for our niche business.",
		author: "Manav Tiwari",
		designation: "Industry: Insurance & Financial Advisory",
		img: Thumb1Img,
		date: "2024-03-10",
	},
	{
		id: crypto.randomUUID(),
		rating: 4,

		description:
			"Smooth process from start to finish. Our SEO rankings improved, and the website traffic doubled in 3 months.",
		author: "Sudeep Nair",
		designation: "Industry: Medical Clinic",
		img: Thumb2Img,
		date: "2024-03-10",
	},
];

const swiperSettingsOne = {
	speed: 12000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: true,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
const swiperSettingsTwo = {
	speed: 12000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1536: {
			slidesPerView: 4,
		},
	},
};
function Testimonial() {
	return (
		<section className="sofax-section-padding7" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn>What our Clients say about us.</TextSplitFadeIn>
						</h2>
					</div>
				</div>
			</div>
			<div className="sofax-testimonial-slider">
				<Swiper {...swiperSettingsOne}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* <div className="sofax-testimonial-slider-2">
				<Swiper {...swiperSettingsTwo}>
					{testimonialOneData.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div> */}
		</section>
	);
}

export default Testimonial;
