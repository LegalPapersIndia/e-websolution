"use client";
import { useState } from "react";
import FadeInStagger from "../../animation/FadeInStagger";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import PricingCard from "./PricingCard";

function PricePlan({ pricingPlans = [], sectionTitle = "Discover the Right Price Plan." }) {
	const frequencies = [
		{ id: 1, label: "/ Year" },
		{ id: 2, label: "/ Month" },
	];

	const [frequency, setFrequency] = useState(frequencies[0]);

	function handleChange(e) {
		setFrequency(e.target.checked ? frequencies[1] : frequencies[0]);
	}

	return (
		<section className="section sofax-section-padding3 bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn>
								{sectionTitle}
							</TextSplitFadeIn>
						</h2>
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
					{pricingPlans.map((pricing, index) => (
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
