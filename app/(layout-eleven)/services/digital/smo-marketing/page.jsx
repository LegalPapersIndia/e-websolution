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
import AboutThumb from "@/public/images/services/digital/smo/about.png";

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
const smoFeatures = [
	{ id: 1, icon: icon1, title: "Platform-Specific Content Strategies" },
	{ id: 2, icon: icon2, title: "Profile Optimization for Visibility" },
	{ id: 3, icon: icon3, title: "Engagement-Driven Campaigns" },
	{ id: 4, icon: icon4, title: "Consistent Brand Voice" },
	{ id: 5, icon: icon5, title: "Data-Driven Performance Tracking" },
	{ id: 6, icon: icon6, title: "Cross-Platform Promotion" },
];

/* Service Features */
const serviceData = {
	title: "Our SMO Marketing Approach",
	shapeImage: Shape2,
	strategyTitle: "SMO Strategies That Drive Engagement",
	strategyDescription:
		"We align your social media presence with your brand goals, leveraging platform algorithms and creative storytelling to drive organic visibility and community engagement.",
	listItems: [
		[
			{ icon: Icon, text: "Audience Targeting & Hashtag Research" },
			{ icon: Icon, text: "Creative Content Scheduling" },
			{ icon: Icon, text: "Brand Reputation Management" },
		],
		[
			{ icon: Icon, text: "Performance Analytics & Reporting" },
			{ icon: Icon, text: "Platform Algorithm Optimization" },
			{ icon: Icon, text: "Ongoing Community Interaction" },
		],
	],
};

/* Projects */
const customProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Instagram Growth Campaign",
		category: "SMO Marketing",
		link: "/projects/smo-instagram-growth",
	},
	{
		id: 2,
		image: thumb2,
		title: "LinkedIn Brand Building",
		category: "SMO Marketing",
		link: "/projects/smo-linkedin-branding",
	},
	{
		id: 3,
		image: thumb3,
		title: "Facebook Engagement Boost",
		category: "SMO Marketing",
		link: "/projects/smo-facebook-boost",
	},
];

/* Price Plan */
const smoPricing = [
  {
    id: 1,
    plan: "Social Spark",
    description: "Perfect for individuals and small brands starting their social journey.",
    duration: "6 Month",
    pricePerMonth: "2166",
    originalPrice: "19999",
    savings: "34.07%",
    payToday: "12999",
    renewsAt: "9999",
    gstNote: "*18% GST Extra",
    features: [
      "Facebook & Instagram Optimization",
      "12 Branded Posts/Month",
      "Hashtag Research & Strategy",
      "Monthly Engagement Reports",
      "Profile Bio & Banner Optimization",
      "Basic Ads Setup Guidance",
      "Email Support"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Engage Pro",
    description: "Best suited for growing businesses seeking deeper engagement.",
    duration: "12 Month",
    pricePerMonth: "2999",
    originalPrice: "53988",
    savings: "33.35%",
    payToday: "35988",
    renewsAt: "14999",
    gstNote: "*18% GST Extra",
    features: [
      "All features in Social Spark",
      "Multi-Platform Strategy (FB, IG, Twitter)",
      "20 Custom Posts/Month",
      "Community Engagement (Comments & DMs)",
      "Competitor Monitoring",
      "Monthly Analytics Reports",
      "Ad Boost Strategy Consultation"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "Viral Velocity",
    description: "High-performance plan for aggressive brand visibility & growth.",
    duration: "12 Month",
    pricePerMonth: "4166",
    originalPrice: "69999",
    savings: "28.57%",
    payToday: "49999",
    renewsAt: "19999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Engage Pro",
      "30+ Creative Posts/Month",
      "Video Reels & Story Designs",
      "Influencer Collaboration Strategy",
      "Social Media Ad Management",
      "Lead Generation Campaigns",
      "24/7 Priority Support",
      "Detailed ROI Tracking"
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
		review: "Our social media pages went from stagnant to buzzing with activity. The team knew exactly how to craft engaging content that resonated with our audience.",
		author: { name: "Priya Malhotra", title: "Fashion Brand Owner" },
	},
	{
		id: 2,
		image: image2,
		rating: 5,
		review: "Their SMO strategy helped us double our follower count and significantly boosted our post interactions. They truly understand each platform’s algorithm and audience behavior.",
		author: { name: "David Chen", title: "Tech Startup Founder" },
	},
	{
		id: 3,
		image: image3,
		rating: 4,
		review: "From optimized profiles to regular insights and analytics, everything was handled professionally. We now have a consistent social presence that aligns with our brand.",
		author: { name: "Sarah Thomas", title: "Marketing Director, NGO" },
	},
];

/* FAQ */
const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is Social Media Optimization (SMO)?",
			answer: "SMO is the process of optimizing your social media profiles and content to increase visibility, engagement, and audience reach across platforms.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Which platforms do you support?",
			answer: "We optimize content for Facebook, Instagram, Twitter, LinkedIn, YouTube, and Pinterest, depending on your business goals.",
		},
		{
			id: "faq-3",
			question: "Do you handle content creation as well?",
			answer: "Yes, we create and schedule platform-specific content that aligns with your brand voice and marketing goals.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How soon can I see results from SMO?",
			answer: "Organic social growth typically takes 1-3 months, but engagement improvements are often visible within weeks.",
		},
		{
			id: "faq-5",
			question: "Can you help with social media ads too?",
			answer: "While SMO is organic-focused, we also offer paid campaign support if you're looking to boost results further.",
		},
		{
			id: "faq-6",
			question: "Do you provide monthly reports?",
			answer: "Yes, every plan includes performance insights and recommendations to ensure continual improvement.",
			show: true,
		},
	],
];

/* Main Component */
function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "SMO Marketing" },
				]}
			/>
			<About
				title="SMO Marketing That Builds Lasting Social Presence"
				description="We optimize your social media platforms with engaging content and performance strategies that grow your audience, improve engagement, and enhance brand visibility."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Content Tailored to Each Platform" },
					{ icon: Icon5, text: "Consistent Brand Storytelling" },
					{ icon: Icon5, text: "Audience Interaction & Engagement" },
					{ icon: Icon5, text: "Hashtag & Trend Optimization" },
					{ icon: Icon5, text: "Performance Monitoring & Improvement" },
				]}
			/>
			<Prices pricingPlans={smoPricing} sectionTitle="SMO Packages for Every Stage of Growth" />
			<Projects
				title="Our Social Media Optimization Projects"
				projectsData={customProjects}
				viewAllLink="/projects"
			/>
			<Features title="Key SMO Features" features={smoFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
