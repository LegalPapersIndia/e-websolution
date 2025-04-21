import icon5 from "@/public/images/v8/icon10v8.png";
import icon6 from "@/public/images/v8/icon11v8.png";
import icon4 from "@/public/images/v8/icon6v8.png";
import icon2 from "@/public/images/v8/icon7v8.png";
import icon3 from "@/public/images/v8/icon8v8.png";
import icon1 from "@/public/images/v8/icon9v8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
const servicesData = [
	{
		id: 1,
		icon: icon1,
		title: "All-in-One Service",
		description:
			"From websites to marketing, we handle everything so you don’t need multiple agencies.",
	},
	{
		id: 2,
		icon: icon2,
		title: "We Focus on Real Results",
		description: "We focus on getting you more visitors, leads, and sales through proven methods.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Custom-Tailored Solutions",
		description:
			"We create unique strategies tailored to your business goals and target audience.",
	},
	{
		id: 4,
		icon: icon4,
		title: "Websites That Bring Customers",
		description:
			"Our websites look great and are built to turn visitors into real customers.",
	},
	{
		id: 5,
		icon: icon5,
		title: "Experience with Many Businesses",
		description:
			"We’ve successfully worked with small and large businesses across different industries.",
	},
	{
		id: 6,
		icon: icon6,
		title: "Clear and Honest Communication",
		description: "We provide regular updates and reports in simple language you can easily understand.",
	},
];
function Services() {
	return (
		<section className="sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="mt-5 sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn> Why Choose Us </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="sofax-features-wrapv8">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
