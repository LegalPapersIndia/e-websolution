import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/social-media-marketing/banner.jpg";
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
import AboutThumb from "@/public/images/services/digital/email/about.png";

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

const smallBusinessFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Targeted Campaign Strategy",
	},
	{
		id: 2,
		icon: icon2,
		title: "Responsive Email Templates",
	},
	{
		id: 3,
		icon: icon3,
		title: "List Segmentation & Management",
	},
	{
		id: 4,
		icon: icon4,
		title: "A/B Testing & Optimization",
	},
	{
		id: 5,
		icon: icon5,
		title: "Automation & Drip Campaigns",
	},
	{
		id: 6,
		icon: icon6,
		title: "Real-Time Analytics & Reporting",
	},
];

/* Service Features */

const serviceData = {
	title: "Our Email Marketing Approach",
	shapeImage: Shape2,
	strategyTitle: "Email Campaign Strategies",
	strategyDescription:
		"We craft high-converting email campaigns tailored to your audience using data-driven strategies, personalization, and automation to drive engagement and conversions.",
	listItems: [
		[
			{ icon: Icon, text: "Subscriber Segmentation" },
			{ icon: Icon, text: "Engagement Tracking" },
			{ icon: Icon, text: "Campaign Scheduling" },
		],
		[
			{ icon: Icon, text: "Conversion Optimization" },
			{ icon: Icon, text: "Behavior-Based Automation" },
			{ icon: Icon, text: "Lead Nurturing Sequences" },
		],
	],
};

/* Projects */

const customProjects = [
	{
		id: 1,
		image: thumb1,
		title: "E-commerce Promo Campaign",
		category: "Email Marketing",
		link: "/projects/email-campaign-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Product Launch Series",
		category: "Email Marketing",
		link: "/projects/email-campaign-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Customer Retention Drip",
		category: "Email Marketing",
		link: "/projects/email-campaign-3",
	},
];

/* Price Plan */

const smallBusinessPricing = [
	{
		id: 1,
		plan: "Starter",
		price: [
			{ id: 1, value: 49 },
			{ id: 2, value: 12 },
		],
		features: [
			"Up to 2 Campaigns/Month",
			"Basic Email Templates",
			"Performance Tracking",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Growth",
		price: [
			{ id: 1, value: 99 },
			{ id: 2, value: 25 },
		],
		features: [
			"Up to 6 Campaigns/Month",
			"Custom Template Design",
			"List Segmentation & A/B Testing",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Pro",
		price: [
			{ id: 1, value: 149 },
			{ id: 2, value: 40 },
		],
		features: [
			"Unlimited Campaigns",
			"Advanced Automation",
			"Dedicated Campaign Manager",
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
		review: "Their email campaigns helped us reconnect with our audience and doubled our engagement rate. Highly professional and results-driven!",
		author: { name: "Sandra Lopez", title: "Marketing Head" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "I was impressed with the personalized strategy and detailed analytics. Our ROI on email marketing has never been better.",
		author: { name: "Daniel Kim", title: "E-commerce Owner" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "From beautiful designs to well-timed campaigns, they helped us stay connected with our subscribers and grow our brand.",
		author: { name: "Emma Clarke", title: "Brand Manager" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What types of email campaigns do you offer?",
			answer: "We handle promotional, transactional, onboarding, follow-up, and newsletter campaigns tailored to your audience.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can you help with email list building?",
			answer: "Absolutely! We help grow your list using ethical opt-in methods and lead magnet strategies.",
		},
		{
			id: "faq-3",
			question: "Do you provide campaign reports?",
			answer: "Yes, every campaign includes detailed reports with open rates, CTRs, conversions, and more.",
		},
	],
	[
		{
			id: "faq-4",
			question: "What email platforms do you work with?",
			answer: "We work with Mailchimp, Sendinblue, Klaviyo, ActiveCampaign, and others depending on your needs.",
		},
		{
			id: "faq-5",
			question: "How often should I send emails?",
			answer: "It depends on your audience and goals. We'll create a custom schedule based on data and best practices.",
		},
		{
			id: "faq-6",
			question: "Can I approve the email content before sending?",
			answer: "Yes, we always share drafts for your review and approval before launching any campaign.",
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
					{ label: "Email Marketing" }
				]}
			/>
			<About
				title="Targeted Email Marketing That Drives Results"
				description="Deliver the right message to the right audience at the right time. Our data-driven email campaigns help you nurture leads, engage customers, and boost conversions effortlessly."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Personalized Campaign Strategy" },
					{ icon: Icon5, text: "Behavior-Based Automation" },
					{ icon: Icon5, text: "Responsive & Branded Templates" },
					{ icon: Icon5, text: "Performance Tracking & Insights" },
					{ icon: Icon5, text: "Seamless CRM & Tool Integration" },
				]}
			/>
			<Features title="Email Marketing Features" features={smallBusinessFeatures} />
			{/* <AutoSlider /> */}
			<Prices pricingPlans={smallBusinessPricing} sectionTitle="Flexible Plans for Every Stage of Growth" />
			<SingleServiceDetails serviceData={serviceData} />
			<Projects
				title="Email Campaigns We've Delivered"
				projectsData={customProjects}
				viewAllLink="/projects"
			/>
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
