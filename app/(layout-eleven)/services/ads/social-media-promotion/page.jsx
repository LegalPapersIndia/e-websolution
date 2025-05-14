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
import AboutThumb from "@/public/images/services/ads/social-media/about.png";

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

const socialMediaPromotionFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Targeted Audience Engagement",
	},
	{
		id: 2,
		icon: icon2,
		title: "Strategic Content Creation",
	},
	{
		id: 3,
		icon: icon3,
		title: "Platform-Specific Campaigns",
	},
	{
		id: 4,
		icon: icon4,
		title: "Data-Driven Insights & Analytics",
	},
	{
		id: 5,
		icon: icon5,
		title: "Brand Visibility & Awareness",
	},
	{
		id: 6,
		icon: icon6,
		title: "Effective Ad Campaigns for ROI",
	},
];

/* Service Features */

const serviceData = {
	title: "Our Social Media Promotion Strategy",
	shapeImage: Shape2,
	strategyTitle: "Social Media Promotion Strategies",
	strategyDescription:
		"Utilizing data-driven strategies, we create tailored social media campaigns to increase brand awareness, engage with your target audience, and drive results.",
	listItems: [
		[
			{ icon: Icon, text: "Targeted Audience Research" },
			{ icon: Icon, text: "Content Creation & Curation" },
			{ icon: Icon, text: "Engagement Tactics & Community Building" },
		],
		[
			{ icon: Icon, text: "Paid Social Media Advertising" },
			{ icon: Icon, text: "Platform Optimization (Facebook, Instagram, LinkedIn, etc.)" },
			{ icon: Icon, text: "Analytics & Campaign Tracking" },
		],
	],
};

/* Projects */

const customProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Project 1",
		category: "Social Media Marketing",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Project 2",
		category: "Social Media Marketing",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Project 3",
		category: "Social Media Marketing",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const socialMediaPricing = [
  {
    id: 1,
    plan: "Social Spark",
    description: "Kickstart your brand presence on major social platforms.",
    duration: "3 Month",
    pricePerMonth: "7999",
    originalPrice: "36000",
    savings: "33.35%",
    payToday: "23997",
    renewsAt: "17997",
    gstNote: "*18% GST Extra",
    features: [
      "Profile Optimization (FB & Insta)",
      "12 Posts/Month",
      "Hashtag Strategy",
      "Engagement Boosting",
      "Monthly Reporting",
      "1 Ad Campaign (₹2000 Budget Included)",
      "Content Calendar Planning"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Viral Vibe",
    description: "Amplify brand buzz across platforms with targeted campaigns.",
    duration: "6 Month",
    pricePerMonth: "13499",
    originalPrice: "108000",
    savings: "25.01%",
    payToday: "80994",
    renewsAt: "40494",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Social Spark",
      "Multi-Platform Support (FB, Insta, Twitter)",
      "Ad Spend Planning & Execution",
      "24 Posts/Month",
      "Story Highlights Design",
      "Bi-Weekly Analytics",
      "Influencer Shoutout Coordination"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "Trend Dominator",
    description: "Dominate social media trends with pro strategies and viral content.",
    duration: "12 Month",
    pricePerMonth: "19999",
    originalPrice: "300000",
    savings: "33.34%",
    payToday: "159990",
    renewsAt: "79995",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Viral Vibe",
      "Short Video/Reel Creation (4/month)",
      "Trend Monitoring & Execution",
      "Advanced Audience Targeting",
      "Cross-Platform Strategy (LinkedIn, YouTube Shorts included)",
      "Monthly Strategy Review",
      "Dedicated Social Media Manager"
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
		review: "Our social media presence has skyrocketed! The targeted campaigns brought in measurable engagement and sales.",
		author: { name: "Alice Williams", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "The social media marketing campaign boosted our brand visibility and helped us build a strong community of loyal followers.",
		author: { name: "Jane Smith", title: "CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Effective and results-driven approach. We saw a significant uptick in traffic and engagement through our social media ads.",
		author: { name: "John Doe", title: "Business Owner" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "How do you target the right audience for social media promotion?",
			answer: "We use data analytics and audience insights to create campaigns tailored to the specific demographic most likely to engage with your brand.",
			show: true,
		},
		{
			id: "faq-2",
			question: "What platforms do you promote on?",
			answer: "We offer promotion on all major social media platforms like Facebook, Instagram, LinkedIn, Twitter, and others based on your target audience.",
		},
		{
			id: "faq-3",
			question: "What kind of content will be posted on social media?",
			answer: "We create and curate content that is engaging, informative, and aligned with your brand’s voice and objectives.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you manage paid ad campaigns?",
			answer: "Yes, we create and manage paid social media ad campaigns that are optimized for maximum engagement and return on investment.",
		},
		{
			id: "faq-5",
			question: "How do you measure the success of social media campaigns?",
			answer: "We track key performance metrics like engagement, reach, click-through rates, and conversions to gauge the success of campaigns.",
		},
		{
			id: "faq-6",
			question: "What is the typical budget for a social media campaign?",
			answer: "Campaign budgets vary based on goals and platforms, but we offer tailored solutions to meet your business objectives and budget.",
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
					{ label: "Social Media Promotion" }
				]}
			/>
			<About
				title="Boost Your Brand with Expert Social Media Promotion"
				description="Increase brand awareness, engage your audience, and drive conversions with our targeted social media promotion strategies."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Platform-Specific Strategies" },
					{ icon: Icon5, text: "Engage & Build a Loyal Audience" },
					{ icon: Icon5, text: "Optimized Paid Campaigns for Maximum ROI" },
					{ icon: Icon5, text: "In-Depth Analytics & Insights" },
					{ icon: Icon5, text: "Creative & Compelling Content" },
				]}
			/>
			<Prices pricingPlans={socialMediaPricing} sectionTitle="Affordable Social Media Plans for Every Business" />
			<Projects
				title="Our Successful Social Media Campaigns"
				projectsData={customProjects}
				viewAllLink="/projects"
			/>
			<Features title="Key Features" features={socialMediaPromotionFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
