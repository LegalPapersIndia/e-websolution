// import RatingFull from "@/public/images/v1/rattingful.svg";
// import YellowStar from "@/public/images/v1/yellow-ratting.png";
// import Image from "next/image";
// function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
// 	return (
// 		<div className="sofax-testimonial-content">
// 			<div className="sofax-testimonial-rating">
// 				<ul>
// 					{[...Array(rating)].map(() => (
// 						<li key={crypto.randomUUID()}>
// 							<Image src={YellowStar} alt="Rating" />
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div className="sofax-testimonial-data">
// 				<p>{description}</p>
// 			</div>
// 			<div className="sofax-testimonial-author">
// 				<div className="sofax-testimonial-author-thumb">
// 					<Image src={img} alt="author" />
// 				</div>
// 				<div className="sofax-testimonial-author-data">
// 					<h5>{author}</h5>
// 					<p>{designation}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default TestimonialCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import YellowStar from "@/public/images/v1/yellow-ratting.png";
import GoogleIcon from "@/public/images/v1/google-icon.svg";
import GoogleVerified from "@/public/images/v1/google-verified.svg";

function getTimeAgo(dateString) {
	const date = new Date(dateString);
	const now = new Date();
	const diffInSeconds = Math.floor((now - date) / 1000);

	const minutes = Math.floor(diffInSeconds / 60);
	const hours = Math.floor(diffInSeconds / 3600);
	const days = Math.floor(diffInSeconds / 86400);
	const months = Math.floor(diffInSeconds / 2592000);
	const years = Math.floor(diffInSeconds / 31536000);

	if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
	if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
	if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
	if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	return "Just now";
}


function TestimonialCard({ testimonial: { rating, description, author, designation, img, date } }) {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	const isLongText = description.length > 120;
	const visibleText = isLongText && !expanded ? description.slice(0, 120) + "..." : description;

	return (
		<div className="google-review-card">
			<div className="google-review-top">
				<div className="google-review-author">
					<Image src={img} alt={author} width={48} height={48} className="author-img" />
					<div className="author-info">
						<h5 className="author-name">
							{author}
							<Image src={GoogleVerified} alt="Google Verified" width={16} height={16} className="google-verified-icon" />
						</h5>
					</div>
				</div>
				<div className="google-review-rating">
					{[...Array(rating)].map((_, index) => (
						<Image key={index} src={YellowStar} alt="Star" width={20} height={20} />
					))}
				</div>
			</div>

			<p className="google-review-text">
				{visibleText}
				{isLongText && (
					<span className="see-more" onClick={toggleExpanded}>
						{expanded ? " See Less" : " See More"}
					</span>
				)}
			</p>

			<div className="google-review-footer">
				<Image src={GoogleIcon} alt="Google Icon" width={25} height={25} />
				<span className="review-time">{getTimeAgo(date)}</span>
			</div>
		</div>
	);
}

export default TestimonialCard;
