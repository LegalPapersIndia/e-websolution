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
import AboutThumb from "@/public/images/services/ads/google/about.webp";

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

const googleAdsFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Targeted Campaigns for Higher ROI",
	},
	{
		id: 2,
		icon: icon2,
		title: "Expert Keyword Research & Strategy",
	},
	{
		id: 3,
		icon: icon3,
		title: "Optimized Ad Copy for Maximum Engagement",
	},
	{
		id: 4,
		icon: icon4,
		title: "Real-Time Campaign Analytics & Monitoring",
	},
	{
		id: 5,
		icon: icon5,
		title: "Advanced Conversion Tracking & Optimization",
	},
	{
		id: 6,
		icon: icon6,
		title: "Comprehensive Budget Management",
	},
];

/* Service Features */

const serviceData = {
	title: "Our Google Ads Strategy",
	shapeImage: Shape2,
	strategyTitle: "Google Ads Campaign Strategy",
	strategyDescription:
		"Our approach is to craft highly targeted Google Ads campaigns that maximize your ROI. We focus on understanding your business goals and target audience to deliver ads that convert.",
	listItems: [
		[
			{ icon: Icon, text: "Extensive Keyword Research" },
			{ icon: Icon, text: "Ad Copy Optimization" },
			{ icon: Icon, text: "A/B Testing for Ads" },
		],
		[
			{ icon: Icon, text: "Target Audience Analysis" },
			{ icon: Icon, text: "Performance Tracking & Analytics" },
			{ icon: Icon, text: "Budget Control & Cost Efficiency" },
		],
	],
};

/* Projects */

const googleAdsProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Campaign for E-Commerce Business",
		category: "Google Ads",
		link: "/projects/google-ads-project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Local Service Provider Campaign",
		category: "Google Ads",
		link: "/projects/google-ads-project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Lead Generation Campaign for SaaS",
		category: "Google Ads",
		link: "/projects/google-ads-project-3",
	},
];

/* Price Plan */

const googleAdsPricing = [
  {
    id: 1,
    plan: "AdStarter Boost",
    description: "Perfect for new businesses testing Google Ads.",
    duration: "3 Month",
    pricePerMonth: "9999",
    originalPrice: "11994",
    savings: "16.68%",
    payToday: "29997",
    renewsAt: "14998",
    gstNote: "*18% GST Extra",
    features: [
      "Campaign Setup",
      "Keyword Research",
      "Ad Extensions Included",
      "Geo Targeting",
      "Monthly Reporting",
      "Budget Monitoring",
      "Ad Copy Optimization"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Growth Accelerator",
    description: "Best for growing businesses looking for leads.",
    duration: "6 Month",
    pricePerMonth: "9499",
    originalPrice: "72000",
    savings: "20.84%",
    payToday: "56994",
    renewsAt: "28497",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in AdStarter",
      "Conversion Tracking Setup",
      "A/B Ad Testing",
      "Retargeting Ads",
      "Device Bid Adjustment",
      "Custom Audience Targeting",
      "Bi-weekly Performance Review"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "Elite PPC Mastery",
    description: "For established brands with high ad spend needs.",
    duration: "12 Month",
    pricePerMonth: "14999",
    originalPrice: "210000",
    savings: "14.28%",
    payToday: "153990",
    renewsAt: "74995",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Growth Accelerator",
      "Advanced Analytics Integration",
      "Shopping & Display Campaigns",
      "Video Ads Management",
      "24/7 Campaign Monitoring",
      "Competitor Analysis",
      "Dedicated Ad Strategist"
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
		review: "Our Google Ads campaigns have transformed our business! We’re seeing higher conversion rates and more qualified leads.",
		author: { name: "Alice Johnson", title: "Founder, Tech Startup" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "The Google Ads strategy implemented by the team helped us expand our reach and double our sales in just a few months.",
		author: { name: "John Doe", title: "CEO, E-Commerce Store" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "We’re really happy with the results. Our ad campaigns are more efficient, and our leads are higher quality.",
		author: { name: "Sarah Lee", title: "Marketing Director, Local Business" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What makes your Google Ads strategy different?",
			answer: "We focus on understanding your business goals and target audience, crafting a tailored approach that delivers the best results for you.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How do you measure success in Google Ads campaigns?",
			answer: "We track key performance indicators (KPIs) like click-through rates (CTR), conversion rates, and return on ad spend (ROAS) to measure success.",
		},
		{
			id: "faq-3",
			question: "How much should I budget for Google Ads?",
			answer: "Budgeting depends on your business goals and competition in your industry. We offer flexible plans to work with any budget and ensure the best value.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you provide ongoing optimization for campaigns?",
			answer: "Yes, we continuously optimize your campaigns by analyzing performance data and adjusting strategies to ensure maximum efficiency.",
		},
		{
			id: "faq-5",
			question: "Can you run Google Ads for international campaigns?",
			answer: "Yes, we can tailor Google Ads campaigns for local, national, or international markets, ensuring your ads reach the right audience no matter where they are.",
		},
		{
			id: "faq-6",
			question: "How do I get started with Google Ads?",
			answer: "Simply reach out to us, and we’ll schedule a consultation to understand your needs and goals. From there, we’ll develop a strategy and get your campaigns up and running.",
			show: true,
		},
	],
];

function GoogleAdsService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "Google Ads" }]}
			/>
			<About
				title="Google Ads Campaigns That Deliver Results"
				description="Boost your business visibility with expertly crafted Google Ads campaigns. Drive targeted traffic, increase conversions, and maximize ROI."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Targeted Ad Strategies for Business Growth" },
					{ icon: Icon5, text: "Expert Keyword & Market Research" },
					{ icon: Icon5, text: "Optimized Campaigns for Better Conversions" },
					{ icon: Icon5, text: "Ongoing Performance Monitoring & Adjustment" },
					{ icon: Icon5, text: "Comprehensive Budget Management for Maximum ROI" },
				]}
			/>
			<Prices pricingPlans={googleAdsPricing} sectionTitle="Flexible Google Ads Plans" />
			<Projects
				title="Our Successful Google Ads Campaigns"
				projectsData={googleAdsProjects}
				viewAllLink="/projects"
			/>
			<Features title="Google Ads Features" features={googleAdsFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default GoogleAdsService;
