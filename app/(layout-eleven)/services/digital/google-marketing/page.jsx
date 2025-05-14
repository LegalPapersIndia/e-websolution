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
import AboutThumb from "@/public/images/services/digital/gmp/about.svg";

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
const googleMarketingFeatures = [
	{ id: 1, icon: icon1, title: "Comprehensive Ad Campaign Management" },
	{ id: 2, icon: icon2, title: "Google Ads & Display Network Integration" },
	{ id: 3, icon: icon3, title: "Smart Bidding & Budget Optimization" },
	{ id: 4, icon: icon4, title: "Advanced Conversion Tracking" },
	{ id: 5, icon: icon5, title: "Audience Targeting & Segmentation" },
	{ id: 6, icon: icon6, title: "Performance Insights & Analytics" },
];

/* Service Features */
const serviceData = {
	title: "Our Google Marketing Platform Strategy",
	shapeImage: Shape2,
	strategyTitle: "Data-Driven Growth with Google Marketing",
	strategyDescription:
		"We leverage the full power of Google Marketing Platform to drive smarter, more effective advertising and performance tracking—maximizing ROI through precision targeting and optimization.",
	listItems: [
		[
			{ icon: Icon, text: "Cross-Platform Campaign Integration" },
			{ icon: Icon, text: "Real-Time Reporting & Analytics" },
			{ icon: Icon, text: "Conversion Rate Optimization (CRO)" },
		],
		[
			{ icon: Icon, text: "Behavior-Based Retargeting" },
			{ icon: Icon, text: "Google Ads Creative Strategy" },
			{ icon: Icon, text: "Goal-Driven Ad Budgeting" },
		],
	],
};

/* Projects */
const googleMarketingProjects = [
	{
		id: 1,
		image: thumb1,
		title: "E-commerce Ad Campaign Success",
		category: "Google Marketing",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Lead Generation Through Google Ads",
		category: "Google Marketing",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Multi-Channel Integration Case Study",
		category: "Google Marketing",
		link: "/projects/project-3",
	},
];

/* Price Plan */
const googleMarketingPricing = [
  {
    id: 1,
    plan: "Google Launchpad",
    description: "Kickstart your visibility with targeted Google Ads.",
    duration: "6 Month",
    pricePerMonth: "2999",
    originalPrice: "23999",
    savings: "25.01%",
    payToday: "17999",
    renewsAt: "11999",
    gstNote: "*18% GST Extra",
    features: [
      "Google Search Ad Campaign Setup",
      "10 Keywords Targeting",
      "Ad Copywriting & A/B Testing",
      "Conversion Tracking Setup",
      "Basic Geo Targeting",
      "Monthly Performance Report",
      "Email Support"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Traffic Booster",
    description: "Drive more clicks, conversions, and sales through Google Ads.",
    duration: "12 Month",
    pricePerMonth: "3999",
    originalPrice: "71988",
    savings: "30.57%",
    payToday: "49988",
    renewsAt: "19999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Google Launchpad",
      "Search + Display Network Campaigns",
      "Up to 30 Keywords",
      "Call Tracking Integration",
      "Remarketing Campaigns",
      "Competitor Ad Monitoring",
      "Dedicated Ad Manager Support"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "Conversion Commander",
    description: "Dominate search and display ads with data-driven strategies.",
    duration: "12 Month",
    pricePerMonth: "5416",
    originalPrice: "89999",
    savings: "33.34%",
    payToday: "59999",
    renewsAt: "24999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Traffic Booster",
      "Up to 60 Targeted Keywords",
      "YouTube Ads Setup & Management",
      "Gmail Sponsored Promotions",
      "Google Shopping Ads (if applicable)",
      "Weekly Performance Optimization",
      "24/7 Phone & Chat Support"
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
		review: "Their Google Marketing strategy transformed our ad performance. Our ROI nearly doubled in just a few months!",
		author: { name: "Raj Mehta", title: "Head of Marketing, ZenCart" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "We've never had such in-depth visibility into our campaigns. Everything is optimized and data-driven now.",
		author: { name: "Carla Nguyen", title: "Digital Director, Nexify" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Great results and excellent support. Their understanding of Google Ads and data strategy is top-notch.",
		author: { name: "James Ford", title: "Founder, LocalGrow" },
	},
];

/* FAQ */
const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is included in Google Marketing Platform services?",
			answer: "We provide ad management, audience targeting, smart bidding strategies, conversion tracking, analytics, and campaign optimization using Google tools.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can you manage Google Ads for my business?",
			answer: "Absolutely. We handle complete ad setup, keyword targeting, bidding strategies, and performance monitoring.",
		},
		{
			id: "faq-3",
			question: "How do you track performance and ROI?",
			answer: "We implement detailed conversion tracking, analytics dashboards, and monthly performance reports to monitor results.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you provide reports and analytics?",
			answer: "Yes, we deliver real-time and monthly reports that cover reach, clicks, conversions, and spend efficiency.",
		},
		{
			id: "faq-5",
			question: "Is this suitable for small businesses?",
			answer: "Definitely. We tailor campaigns for businesses of all sizes and help maximize results from your advertising budget.",
		},
		{
			id: "faq-6",
			question: "Can I use multiple ad channels?",
			answer: "Yes, we can integrate campaigns across Google Search, Display, Shopping, and YouTube for multi-channel impact.",
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
					{ label: "Google Marketing Platform" },
				]}
			/>
			<About
				title="Power Your Growth with Google Marketing Platform"
				description="Maximize visibility and conversions with fully optimized ad strategies across Google’s powerful tools. We help you turn data into revenue."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Google Ads Campaign Management" },
					{ icon: Icon5, text: "Smart Budgeting & Optimization" },
					{ icon: Icon5, text: "Performance Tracking & Reporting" },
					{ icon: Icon5, text: "Audience Targeting & Retargeting" },
					{ icon: Icon5, text: "Cross-Channel Campaign Support" },
				]}
			/>
			<Prices pricingPlans={googleMarketingPricing} sectionTitle="Google Marketing Plans for All Sizes" />
			<Projects
				title="Google Marketing Success Stories"
				projectsData={googleMarketingProjects}
				viewAllLink="/projects"
			/>
			<Features title="Why Choose Google Marketing with Us?" features={googleMarketingFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
