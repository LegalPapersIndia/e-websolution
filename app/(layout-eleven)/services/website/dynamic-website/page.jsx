import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/web-develoment/banner1.jpg";
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
import AboutThumb from "@/public/images/services/webiste/dynamic/about.jpg";

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
import PortfolioFilter from "@/components/project-filter/PortfolioFilter";

export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};

/* Features */

const dynamicWebsiteFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Real-Time Content Management",
	},
	{
		id: 2,
		icon: icon2,
		title: "User Interaction & Personalization",
	},
	{
		id: 3,
		icon: icon3,
		title: "Fully Integrated CMS Solutions",
	},
	{
		id: 4,
		icon: icon4,
		title: "Dynamic Pages & Custom Functionality",
	},
	{
		id: 5,
		icon: icon5,
		title: "Scalable Database Connectivity",
	},
	{
		id: 6,
		icon: icon6,
		title: "Built for Speed, Security, and SEO",
	},
];

/* Service Features */

const serviceData = {
	title: "Dynamic Web Design Approach",
	shapeImage: Shape2,
	strategyTitle: "Creating Adaptive, Data-Driven Websites",
	strategyDescription:
		"Our dynamic websites adapt in real time, driven by database content and user behavior. We combine design, tech, and strategy to create seamless, powerful digital experiences.",
	listItems: [
		[
			{ icon: Icon, text: "CMS Integration (WordPress, Strapi, Sanity)" },
			{ icon: Icon, text: "Custom Dashboards & Admin Panels" },
			{ icon: Icon, text: "Interactive UI/UX Elements" },
		],
		[
			{ icon: Icon, text: "Real-Time Updates & API Connections" },
			{ icon: Icon, text: "Dynamic Routing & Modular Components" },
			{ icon: Icon, text: "User Role-Based Access & Control" },
		],
	],
};

/* Projects */

const dynamicProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Real-Time Content Platform",
		category: "Dynamic Website",
		link: "/projects/real-time-platform",
	},
	{
		id: 2,
		image: thumb2,
		title: "CMS-Driven Corporate Site",
		category: "Dynamic Website",
		link: "/projects/cms-corporate",
	},
	{
		id: 3,
		image: thumb3,
		title: "Interactive Membership Portal",
		category: "Dynamic Website",
		link: "/projects/membership-portal",
	},
];

/* Price Plan */

const dynamicWebsitePricing = [
	{
		id: 1,
		plan: "Dynamic Lite",
		price: [
			{ id: 1, value: 85 },
			{ id: 2, value: 25 },
		],
		features: [
			"5 Dynamic Pages",
			"Basic CMS Integration",
			"Responsive Design",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Pro Dynamic",
		price: [
			{ id: 1, value: 140 },
			{ id: 2, value: 45 },
		],
		features: [
			"10+ Dynamic Pages",
			"Custom CMS & Admin Panel",
			"Advanced Forms & User Input",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Dynamic Max",
		price: [
			{ id: 1, value: 220 },
			{ id: 2, value: 70 },
		],
		features: [
			"Full API Integration",
			"User Roles & Permissions",
			"Custom Dashboard + Automation",
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
		review: "Our dynamic website is a game changer! Real-time updates and a smooth CMS backend made managing content effortless.",
		author: { name: "Elena Foster", title: "Marketing Manager" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "Incredible job! They built us a dynamic platform that interacts with users and displays content based on behavior. Brilliant.",
		author: { name: "Nathan Kim", title: "Product Owner" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Highly functional, sleek, and scalable. The team went above and beyond with custom CMS and automated flows. Very happy!",
		author: { name: "Tasha Reeds", title: "Founder, Digital Portal" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is a dynamic website?",
			answer: "A dynamic website fetches and displays content in real-time from a database or CMS. It allows easy updates and user interactivity.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can I update my site without coding?",
			answer: "Yes! Our dynamic sites are CMS-powered so you can manage content, images, and pages without any technical knowledge.",
		},
		{
			id: "faq-3",
			question: "Is a dynamic site SEO-friendly?",
			answer: "Absolutely. We build all our dynamic websites with SEO best practices, schema, and optimized loading speed.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Can I connect third-party APIs?",
			answer: "Yes. We specialize in API integrations for payments, analytics, CRMs, automation tools, and more.",
		},
		{
			id: "faq-5",
			question: "What technology stacks do you use?",
			answer: "We work with React, Next.js, Node.js, Express, MongoDB, Strapi, WordPress, and more—based on your needs.",
		},
		{
			id: "faq-6",
			question: "How long does it take to build a dynamic site?",
			answer: "Timelines vary depending on complexity, but most dynamic sites take 3–5 weeks for full development and testing.",
			show: true,
		},
	],
];

/* Component */

function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "Dynamic Website Design" }
				]}
			/>
			<About
				title="Dynamic Website Design for Seamless Digital Experiences"
				description="We build powerful, data-driven websites that adapt in real-time. Whether it's CMS content, user dashboards, or API-powered pages, we create fast, secure, and fully interactive solutions."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Real-Time Content Updates" },
					{ icon: Icon5, text: "Custom CMS & Admin Panels" },
					{ icon: Icon5, text: "Interactive User Experiences" },
					{ icon: Icon5, text: "High Performance & SEO Ready" },
					{ icon: Icon5, text: "Future-Proof & Scalable Codebase" },
				]}
			/>
			<Prices pricingPlans={dynamicWebsitePricing} sectionTitle="Flexible Plans for Dynamic Website Development" />
			{/* <Projects
				title="Dynamic Projects We've Built"
				projectsData={dynamicProjects}
				viewAllLink="/projects"
			/> */}
			<PortfolioFilter />
			<Features title="Dynamic Website Features" features={dynamicWebsiteFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
