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
import AboutThumb from "@/public/images/service/service-thumb.png";

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

const tvAdsFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Impactful Storytelling",
	},
	{
		id: 2,
		icon: icon2,
		title: "Targeted Audience Reach",
	},
	{
		id: 3,
		icon: icon3,
		title: "Creative Visuals & Design",
	},
	{
		id: 4,
		icon: icon4,
		title: "High-Quality Production",
	},
	{
		id: 5,
		icon: icon5,
		title: "24/7 Viewer Engagement",
	},
	{
		id: 6,
		icon: icon6,
		title: "Effective ROI Tracking",
	},
];

/* Service Features */

const serviceData = {
	title: "Our TV Ads Approach",
	shapeImage: Shape2,
	strategyTitle: "TV Ads Strategies",
	strategyDescription:
		"Our TV ads strategy is all about creating emotional connections with your audience while effectively communicating your brand's message. We blend creativity with data-driven insights to produce ads that resonate and drive results.",
	listItems: [
		[
			{ icon: Icon, text: "Targeted Media Buying" },
			{ icon: Icon, text: "Creative Script Writing" },
			{ icon: Icon, text: "Engaging Storytelling" },
		],
		[
			{ icon: Icon, text: "High-Quality Video Production" },
			{ icon: Icon, text: "Comprehensive Campaign Strategy" },
			{ icon: Icon, text: "Performance Analytics" },
		],
	],
};

/* Projects */

const tvAdsProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Ad Campaign 1",
		category: "TV Ad",
		link: "/projects/ad-campaign-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Ad Campaign 2",
		category: "TV Ad",
		link: "/projects/ad-campaign-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Ad Campaign 3",
		category: "TV Ad",
		link: "/projects/ad-campaign-3",
	},
];

/* Price Plan */

const tvAdsPricing = [
	{
		id: 1,
		plan: "Basic",
		price: [
			{ id: 1, value: 500 },
			{ id: 2, value: 100 },
		],
		features: [
			"30-Second Commercial",
			"Targeted Ad Placement",
			"Broadcast on Local Channels",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Premium",
		price: [
			{ id: 1, value: 1000 },
			{ id: 2, value: 200 },
		],
		features: [
			"60-Second Commercial",
			"Targeted National Ad Placement",
			"Creative Script Writing",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Elite",
		price: [
			{ id: 1, value: 1500 },
			{ id: 2, value: 500 },
		],
		features: [
			"Full Campaign Strategy",
			"National and Global Placement",
			"High-Quality Video Production",
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
		review: "The TV ad campaign was a game-changer! It helped us connect with a broader audience, and we saw a noticeable spike in sales.",
		author: { name: "Sarah Johnson", title: "Marketing Director" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "The creativity and execution of the ad was exceptional. Our brand message was clear, and the campaign exceeded expectations.",
		author: { name: "Michael Brown", title: "CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "We saw a great return on investment from the TV ad campaign. The process was smooth, and the results were impressive.",
		author: { name: "David Lee", title: "Business Owner" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What makes your TV ads unique?",
			answer: "We specialize in creating ads that not only captivate but also drive tangible results. Our creative process ensures your brand message is delivered effectively and emotionally resonates with your audience.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How do you determine the target audience for the ad?",
			answer: "We use detailed market research and data analytics to identify your ideal audience and tailor the ad to resonate with them across multiple platforms.",
		},
		{
			id: "faq-3",
			question: "How long does it take to create a TV ad?",
			answer: "Typically, the entire process—from concept development to final broadcast—takes 4 to 6 weeks depending on the complexity and scope of the campaign.",
		},
	],
	[
		{
			id: "faq-4",
			question: "What types of businesses do you work with?",
			answer: "We work with a wide variety of industries including tech, retail, healthcare, real estate, and more. No matter your business, we can tailor a TV ad campaign to meet your needs.",
		},
		{
			id: "faq-5",
			question: "Do you provide media buying and placement services?",
			answer: "Yes, we handle both the media buying and placement, ensuring that your ad reaches the right audience on the most effective channels.",
		},
		{
			id: "faq-6",
			question: "What is the cost of a TV ad campaign?",
			answer: "Costs vary depending on the scope of the project. We provide custom quotes based on your campaign's needs and goals.",
			show: true,
		},
	],
];

function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "TV Ads" }]}
			/>
			<About
				title="Maximize Your Reach with Powerful TV Ads"
				description="Our TV ad services are designed to bring your brand to life through creative storytelling, impactful visuals, and effective targeting strategies. We help you reach new heights with captivating ads that leave a lasting impression."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Creative TV Ad Concepts" },
					{ icon: Icon5, text: "Targeted Campaign Strategies" },
					{ icon: Icon5, text: "High-Quality Video Production" },
					{ icon: Icon5, text: "Effective Audience Engagement" },
					{ icon: Icon5, text: "Proven ROI and Analytics" },
				]}
			/>
			<Features title="Key Features" features={tvAdsFeatures} />
			<AutoSlider />
			<SingleServiceDetails serviceData={serviceData} />
			<Projects
				title="Our Recent TV Ad Campaigns"
				projectsData={tvAdsProjects}
				viewAllLink="/projects"
			/>
			<Prices pricingPlans={tvAdsPricing} sectionTitle="Affordable TV Ad Campaign Packages" />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
