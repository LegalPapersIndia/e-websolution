import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/advertisement-promotion/banner.jpg";
import Hero from "@/components/home/home-ten/hero";
import About from "@/components/service-page/about";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/service-page/faq";
import SingleServiceDetails from "@/components/service-page/service-features";
import Projects from "@/components/service-page/projects";
import Features from "@/components/service-page/feautres";
import Testimonials from "@/components/service-page/testimonials";
import Prices from "@/components/service-page/price-plan";
import Icon5 from "@/public/images/service/icon5.png";
import AboutThumb from "@/public/images/services/ads/brands/about.jpg";

import icon5 from "@/public/images/v8/icon10v8.png";
import icon6 from "@/public/images/v8/icon11v8.png";
import icon4 from "@/public/images/v8/icon6v8.png";
import icon2 from "@/public/images/v8/icon7v8.png";
import icon3 from "@/public/images/v8/icon8v8.png";
import icon1 from "@/public/images/v8/icon9v8.png";
import thumb1 from "@/public/images/v8/thumb1v8.png";
import thumb2 from "@/public/images/v8/thumb2v8.png";
import thumb3 from "@/public/images/v8/thumb3v8.png";
import image1 from "@/public/images/v8/image4v8.png";
import image2 from "@/public/images/v8/image5v8.png";
import image3 from "@/public/images/v8/image6v8.png";
import Icon from "@/public/images/service/icon5.png";
import Shape2 from "@/public/images/v5/shape2.png";
import featureIcon from "@/public/images/v1/icon8.png";

export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};

/* Features */

const brandPromotionFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Custom, Impactful Campaigns",
	},
	{
		id: 2,
		icon: icon2,
		title: "Engaging Audience with Targeted Strategies",
	},
	{
		id: 3,
		icon: icon3,
		title: "Multi-Channel Approach",
	},
	{
		id: 4,
		icon: icon4,
		title: "Data-Driven Insights for Better Results",
	},
	{
		id: 5,
		icon: icon5,
		title: "Boost Brand Visibility and Awareness",
	},
	{
		id: 6,
		icon: icon6,
		title: "Creative and Engaging Content",
	},
];

/* Service Features */

const serviceData = {
	title: "Our Brand Promotion Approach",
	shapeImage: Shape2,
	strategyTitle: "Brand Promotion Strategies",
	strategyDescription:
		"Our brand promotion strategies are designed to increase your brand's presence, awareness, and customer loyalty through a combination of creative and data-driven approaches. We focus on maximizing your brand's impact across various channels.",
	listItems: [
		[
			{ icon: Icon, text: "Comprehensive Market Research" },
			{ icon: Icon, text: "Tailored Campaigns for Target Audience" },
			{ icon: Icon, text: "Effective Social Media Engagement" },
		],
		[
			{ icon: Icon, text: "Influencer & Partnership Marketing" },
			{ icon: Icon, text: "Consistent Branding Across Platforms" },
			{ icon: Icon, text: "Real-Time Performance Tracking" },
		],
	],
};

/* Projects */

const brandPromotionProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Project 1",
		category: "Brand Promotion",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Project 2",
		category: "Brand Promotion",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Project 3",
		category: "Brand Promotion",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const brandPromotionPricing = [
	{
		id: 1,
		plan: "Basic",
		price: [
			{ id: 1, value: 45 },
			{ id: 2, value: 10 },
		],
		features: [
			"Single Channel Promotion",
			"Social Media Focused Campaign",
			"Basic Analytics Report",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Advanced",
		price: [
			{ id: 1, value: 95 },
			{ id: 2, value: 20 },
		],
		features: [
			"Multi-Channel Campaigns",
			"Influencer Collaboration",
			"Advanced Analytics and Reporting",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Premium",
		price: [
			{ id: 1, value: 150 },
			{ id: 2, value: 30 },
		],
		features: [
			"Comprehensive Brand Strategy",
			"Cross-Platform Integration",
			"Dedicated Account Manager",
		],
		featureIcon,
		highlighted: false,
	},
];

/* Testimonials */

const testimonialsData = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Working with this team was transformative for our brand. They helped us connect with the right audience, resulting in a significant boost in awareness and engagement.",
		author: { name: "Sarah Lee", title: "Marketing Director" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "Their brand promotion strategies are top-notch. Our online presence and brand image have never been stronger. A perfect balance of creativity and data-driven results!",
		author: { name: "Tom Johnson", title: "Founder & CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "The campaign exceeded our expectations. The team is skilled at crafting campaigns that resonate with the audience and elevate the brand’s reputation.",
		author: { name: "Emily Davis", title: "Brand Manager" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is Brand Promotion?",
			answer: "Brand promotion is the process of creating awareness, visibility, and loyalty around your brand through various marketing channels and tactics.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How long does a brand promotion campaign take?",
			answer: "Campaigns can vary, but typically they take 2-3 months to achieve measurable results depending on the scope and channels involved.",
		},
		{
			id: "faq-3",
			question: "How do you measure the success of a brand campaign?",
			answer: "We track various metrics like engagement, reach, conversions, and return on investment (ROI) to measure the success of a campaign.",
		},
	],
	[
		{
			id: "faq-4",
			question: "What channels do you use for brand promotion?",
			answer: "We use a multi-channel approach including social media, influencer partnerships, content marketing, paid ads, and more to maximize brand exposure.",
		},
		{
			id: "faq-5",
			question: "Can you work with my existing marketing team?",
			answer: "Yes, we collaborate closely with your team to ensure our brand promotion strategies align with your broader marketing goals.",
		},
		{
			id: "faq-6",
			question: "How much does brand promotion cost?",
			answer: "Our pricing depends on the scope and platforms used, but we offer a range of plans designed to fit various budgets. Please get in touch for a custom quote.",
			show: true,
		},
	],
];

function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "Brand Promotion" },
				]}
			/>
			<About
				title="Transform Your Brand with Powerful Promotion"
				description="Our brand promotion services are tailored to increase visibility, awareness, and customer loyalty. We leverage creative strategies and data-driven insights to maximize your brand's impact."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Creative and Customized Campaigns" },
					{ icon: Icon5, text: "Strategic Multi-Channel Engagement" },
					{ icon: Icon5, text: "Data-Driven Performance Tracking" },
					{ icon: Icon5, text: "Audience-Focused Messaging" },
					{ icon: Icon5, text: "Boosted Visibility Across Platforms" },
				]}
			/>
			<Features title="Key Features" features={brandPromotionFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Projects
				title="Our Recent Brand Promotion Campaigns"
				projectsData={brandPromotionProjects}
				viewAllLink="/projects"
			/>
			<Prices pricingPlans={brandPromotionPricing} sectionTitle="Affordable Brand Promotion Plans" />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
