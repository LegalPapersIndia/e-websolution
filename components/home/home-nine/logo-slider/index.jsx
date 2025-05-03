"use client";
import logo1 from "@/public/images/v9/logo1v9.png";
import logo2 from "@/public/images/v9/logo2v9.png";
import logo3 from "@/public/images/v9/logo3v9.png";
import logo4 from "@/public/images/v9/logo4v9.png";
import logo5 from "@/public/images/v9/logo5v9.png";
import logo6 from "@/public/images/v9/logo6v9.png";
import logo7 from "@/public/images/v9/logo7v9.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: 1,
		logo: logo1,
		link: "https://sanvith.com/",
	},
	{
		id: 2,
		logo: logo2,
		link: "https://dhruviincenseindia.com/",
	},
	{
		id: 3,
		logo: logo3,
		link: "https://kaverifoodproducts.com/",
	},
	{
		id: 4,
		logo: logo4,
		link: "https://weincredibles.com/",
	},
	{
		id: 5,
		logo: logo5,
		link: "https://dreamtouchspabeauty.com/",
	},
	{
		id: 6,
		logo: logo6,
		link: "https://innovativenaturepicks.com/",
	},
	{
		id: 7,
		logo: logo7,
		link: "https://www.thevedicbrick.com/",
	},
	{
		id: 8,
		logo: logo1,
		link: "https://sanvith.com/",
	},
	{
		id: 9,
		logo: logo2,
		link: "https://dhruviincenseindia.com/",
	},
	{
		id: 10,
		logo: logo3,
		link: "https://kaverifoodproducts.com/",
	},
	{
		id: 11,
		logo: logo4,
		link: "https://weincredibles.com/",
	},
	{
		id: 12,
		logo: logo5,
		link: "https://dreamtouchspabeauty.com/",
	},
	{
		id: 13,
		logo: logo6,
		link: "https://innovativenaturepicks.com/",
	},
	{
		id: 14,
		logo: logo7,
		link: "https://www.thevedicbrick.com/",
	},
];

const swiperSettings = {
	speed: 10000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider() {
	return (
		<section className="sofax-slider-section">
			<div className="container">
				<div className="sofax-title-section">
					<h3>
						<TextSplitFadeIn> Trusted by the Most Valued Clients Nationwide </TextSplitFadeIn>
					</h3>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<Link href={item.link} target="_blank" rel="noopener noreferrer">
											<Image src={item.logo} alt="logo" />
										</Link>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
