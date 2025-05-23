// import Image from "next/image";
// import Link from "next/link";

// function PricingCard({ pricing: { plan, price, img, features, highlighted, featureIcon }, frequency }) {
// 	return (
// 		<div className={`sofax-pricing-wrap ${highlighted ? "recommended" : ""}`}>
// 			{highlighted && <div className="recommended-tag">Recommended</div>}
// 			<div className="sofax-pricing-header">
// 				{/* <Image src={img} alt="icon" /> */}
// 				<h3>{plan}</h3>
// 			</div>
// 			<div className="sofax-pricing-price">
// 				<h3>
// 					₹
// 					{price.map((item) => {
// 						if (item.id === frequency.id) {
// 							return item.value;
// 						}
// 					})}
// 					k
// 				</h3>

// 				<p className="dynamic-value"> {frequency.label}</p>
// 			</div>
// 			<div className="sofax-pricing-body">
// 				{/* <h5>Key features:</h5> */}
// 				<ul>
// 					{features.map((feature) => (
// 						<li key={feature}>
// 							<Image src={featureIcon} alt="feature Icon" />
// 							{feature}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div className="sofax-pricing-footer">
// 				<Link className={`sofax-default-btn d-block pill ${!highlighted && "outline-btn"}`} href="/contact-us">
// 					Purchase now
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

// export default PricingCard;



"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


function PricingCard({ pricing: { plan,  description, duration, pricePerYear, originalPrice, savings, payToday, renewsAt, gstNote, price, img, features, highlighted, featureIcon }, frequency }) {
	const [showAll, setShowAll] = useState(false);
	const displayedFeatures = showAll ? features : features.slice(0, 5);

	return (
		<div className={`sofax-pricing-wrap ${highlighted ? "recommended" : ""}`}>
			{highlighted && <div className="recommended-tag">Recommended</div>}

			<div className="pricing-card-header">
				<h3 className="pricing-title">{plan}</h3>
				<p className="pricing-subtitle">{description}</p>

				<div className="pricing-info-box">
					<div className="pricing-top-row">
						<span className="pricing-duration">{duration} @</span>
						<span className="pricing-amount">₹{pricePerYear}</span>
						<span className="pricing-unit">/yr</span>
					</div>
					<div className="pricing-bottom-row">
						{/* <span className="pricing-original">₹{originalPrice}</span> */}
						<span className="pricing-discount">Save {savings}</span>
					</div>
				</div>

				{/* <p className="pricing-pay-today">You pay ₹{payToday} today.</p>
				<p className="pricing-renew">Renews at ₹{renewsAt}/yr</p> */}
				<p className="pricing-gst-note">{gstNote}</p>
			</div>

			<div className="sofax-pricing-body">
				<AnimatePresence initial={false}>
					<motion.ul
						key={showAll ? "expanded" : "collapsed"}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						style={{ overflow: "hidden" }}
					>
						{displayedFeatures.map((feature) => (
							<li key={feature}>
								{featureIcon && <Image src={featureIcon} alt="feature icon" />}
								{feature}
							</li>
						))}
					</motion.ul>
				</AnimatePresence>

				{features.length > 5 && (
					<button
						onClick={() => setShowAll(!showAll)}
						className="sofax-default-btn small"
					>
						{showAll ? "Show Less Features" : "Show All Features"}
						{showAll ? (
							<ChevronUp size={18} style={{ marginLeft: "8px" }} />
						) : (
							<ChevronDown size={18} style={{ marginLeft: "8px" }} />
						)}
					</button>
				)}
			</div>

			<div className="sofax-pricing-footer">
				<Link className={`sofax-default-btn d-block pill ${!highlighted && "outline-btn"}`} href="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
