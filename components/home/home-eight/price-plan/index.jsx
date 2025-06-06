"use client";
import Icon5 from "@/public/images/v1/icon5.png";
import Icon6 from "@/public/images/v1/icon6.png";
import Icon7 from "@/public/images/v1/icon7.png";
import featureIcon from "@/public/images/v1/icon8.png";
import { useState } from "react";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "Essential",
		price: [
			{ id: 1, value: 10 },
			{ id: 2, value: 5 },
		],
		img: Icon7,
		features: [
			"Home Page Slider, Social Media Integration & emailing",
			"Perfect Product Search, 100% Satisfaction",
			"Responsive Device Design",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Professional",
		price: [
			{ id: 1, value: 15 },
			{ id: 2, value: 10 },
		],
		img: Icon5,
		features: [
			"Home Page Slider, Social Media Integration & emailing",
			"Perfect Product Search, 100% Satisfaction",
			"Responsive Device Design",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Enterprise",
		price: [
			{ id: 1, value: 20 },
			{ id: 2, value: 15 },
		],
		img: Icon6,
		features: [
			"Home Page Slider, Social Media Integration & emailing",
			"Perfect Product Search, 100% Satisfaction",
			"Responsive Device Design",
		],
		featureIcon,
		highlighted: false,
	},
];

function PricePlan() {
	const frequencies = [
		{ id: 1, label: "Per Yearly" },
		{ id: 2, label: "Per Month" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		if (e.target.checked) {
			setFrequency(frequencies[1]);
		} else {
			setFrequency(frequencies[0]);
		}
	}

	return (
		<section className="section sofax-section-padding3 bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>Discover the Right Price Plan.</h2>
					</div>
				</div>

				<div className="pricing-btn">
					<label>Per Month</label>
					<div className="toggle-btn">
						<input
							className="form-check-input btn-toggle price-deck-trigger"
							type="checkbox"
							onChange={handleChange}
						/>
					</div>
					<label>Per Year</label>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} frequency={frequency} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
