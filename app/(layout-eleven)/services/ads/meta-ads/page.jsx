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
import AboutThumb from "@/public/images/services/ads/meta/about.webp";

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

const metaAdsFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Targeted Audience Reach",
	},
	{
		id: 2,
		icon: icon2,
		title: "Cost-Effective Campaigns",
	},
	{
		id: 3,
		icon: icon3,
		title: "Comprehensive Ad Customization",
	},
	{
		id: 4,
		icon: icon4,
		title: "Detailed Analytics & Insights",
	},
	{
		id: 5,
		icon: icon5,
		title: "Seamless Cross-Platform Advertising",
	},
	{
		id: 6,
		icon: icon6,
		title: "Maximized ROI with Performance Optimization",
	},
];

/* Service Features */

const serviceData = {
	title: "Meta Ads Strategy That Drives Results",
	shapeImage: Shape2,
	strategyTitle: "Meta Ads Campaign Strategies",
	strategyDescription:
		"By combining data-driven insights and creative ad formats, we craft Meta Ads campaigns designed to reach your target audience, engage them effectively, and drive conversions.",
	listItems: [
		[
			{ icon: Icon, text: "Audience Segmentation & Targeting" },
			{ icon: Icon, text: "Creative Ad Formats" },
			{ icon: Icon, text: "Budget Optimization" },
		],
		[
			{ icon: Icon, text: "A/B Testing for Campaigns" },
			{ icon: Icon, text: "Retargeting Strategies" },
			{ icon: Icon, text: "Real-Time Analytics & Reporting" },
		],
	],
};

/* Projects */

const metaAdsProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Campaign 1",
		category: "Meta Ads",
		link: "/projects/campaign-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Campaign 2",
		category: "Meta Ads",
		link: "/projects/campaign-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Campaign 3",
		category: "Meta Ads",
		link: "/projects/campaign-3",
	},
];

/* Price Plan */

const metaAdsPricing = [
  {
    id: 1,
    plan: "Social Launchpad",
    description: "Great for small brands starting with Meta Ads.",
    duration: "3 Month",
    pricePerMonth: "4499",
    originalPrice: "16500",
    savings: "18.2%",
    payToday: "13497",
    renewsAt: "14997",
    gstNote: "*18% GST Extra",
    features: [
      "Ad Account Setup",
      "Facebook & Instagram Campaigns",
      "Target Audience Creation",
      "Creative Guidance",
      "Basic Ad Copywriting",
      "Monthly Report",
      "Budget Optimization"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Engage Pro",
    description: "Built for brands aiming to scale with engagement.",
    duration: "6 Month",
    pricePerMonth: "8999",
    originalPrice: "66000",
    savings: "18.17%",
    payToday: "53994",
    renewsAt: "26997",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Social Launchpad",
      "Lookalike Audience Targeting",
      "Retargeting Campaigns",
      "Ad Creative Variants",
      "Weekly Insights",
      "Pixel Integration",
      "Story & Reel Promotion"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "AdDominance Suite",
    description: "Advanced advertising for high-growth campaigns.",
    duration: "12 Month",
    pricePerMonth: "13999",
    originalPrice: "198000",
    savings: "22.71%",
    payToday: "153588",
    renewsAt: "69995",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Engage Pro",
      "Video Ad Campaigns",
      "Advanced Funnel Strategy",
      "Conversion Tracking",
      "Ad Spend Forecasting",
      "24/7 Monitoring & Adjustments",
      "Dedicated Meta Ads Manager"
    ],
    featureIcon,
    highlighted: false
  }
];

/* Testimonials */

const testimonialsData = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Working with the team has been a game-changer! Our Meta Ads campaigns have significantly increased traffic and sales. Highly recommend their services!",
		author: { name: "Alice Williams", title: "E-commerce Entrepreneur" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "The campaigns designed by this team have driven outstanding ROI. The level of targeting and optimization is second to none.",
		author: { name: "Jane Smith", title: "Business Owner" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Fantastic results with Meta Ads. The team truly understands how to reach our audience and keep them engaged.",
		author: { name: "John Doe", title: "Marketing Director" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "How does Meta Ads work?",
			answer: "Meta Ads allow you to target specific audiences across Facebook, Instagram, and Messenger with ads that are tailored to your business goals.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How much should I spend on Meta Ads?",
			answer: "The budget depends on your goals and the scale of your campaigns. We work with you to optimize your budget for maximum returns.",
		},
		{
			id: "faq-3",
			question: "What type of ads can I run on Meta?",
			answer: "You can run a variety of ad formats, including carousel ads, video ads, image ads, and more, depending on your campaign objectives.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How do I measure the success of my Meta Ads campaigns?",
			answer: "We provide detailed reports with metrics like clicks, conversions, cost-per-click, and return on ad spend (ROAS) to measure campaign success.",
		},
		{
			id: "faq-5",
			question: "Can you help with retargeting campaigns?",
			answer: "Yes, we specialize in retargeting strategies that bring back visitors who interacted with your site or content but didn’t convert.",
		},
		{
			id: "faq-6",
			question: "Can I run ads on both Facebook and Instagram?",
			answer: "Yes, we create campaigns that run seamlessly across both Facebook and Instagram to reach your audience wherever they are.",
			show: true,
		},
	],
];

function MetaAdsServicePage() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "Meta Ads" }]}
			/>
			<About
				title="Transform Your Business with Targeted Meta Ads"
				description="Harness the power of Facebook and Instagram ads to reach your target audience with precision. From campaign creation to optimization, we help you grow your business."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Maximize Reach with Targeted Advertising" },
					{ icon: Icon5, text: "Advanced Audience Segmentation" },
					{ icon: Icon5, text: "In-Depth Analytics for Performance" },
					{ icon: Icon5, text: "Multi-Platform Ad Integration" },
					{ icon: Icon5, text: "Dedicated Ad Campaign Management" },
				]}
			/>
			<Prices pricingPlans={metaAdsPricing} sectionTitle="Flexible Meta Ads Pricing Plans" />
			<Projects
				title="Our Successful Meta Ads Campaigns"
				projectsData={metaAdsProjects}
				viewAllLink="/projects"
			/>
			<Features title="Key Features of Meta Ads" features={metaAdsFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default MetaAdsServicePage;
