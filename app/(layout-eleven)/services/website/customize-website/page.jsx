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
import AboutThumb from "@/public/images/services/webiste/customize/about.jpg";

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
const customizeWebsiteFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Tailored Designs for Unique Branding",
	},
	{
		id: 2,
		icon: icon2,
		title: "Fully Responsive on All Devices",
	},
	{
		id: 3,
		icon: icon3,
		title: "Custom Functionalities & Workflows",
	},
	{
		id: 4,
		icon: icon4,
		title: "Optimized for Performance & SEO",
	},
	{
		id: 5,
		icon: icon5,
		title: "Robust Security Integrations",
	},
	{
		id: 6,
		icon: icon6,
		title: "Seamless API & Third-Party Integrations",
	},
];

/* Service Features */
const customizeWebsiteServiceData = {
	title: "Our Custom Web Development Process",
	shapeImage: Shape2,
	strategyTitle: "Custom Website Strategies",
	strategyDescription:
		"We develop fully tailored websites aligned with your business logic, branding, and user goals—crafted from scratch to fit your unique needs.",
	listItems: [
		[
			{ icon: Icon, text: "Business Requirement Analysis" },
			{ icon: Icon, text: "User-First Design Approach" },
			{ icon: Icon, text: "Modular Feature Planning" },
		],
		[
			{ icon: Icon, text: "Interactive Wireframes & Prototypes" },
			{ icon: Icon, text: "Custom Admin & CMS Panels" },
			{ icon: Icon, text: "Ongoing Iterations & Optimization" },
		],
	],
};

/* Projects */
const customizeWebsiteProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Custom Booking Portal",
		category: "Customize Website",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Tailored Online Learning Platform",
		category: "Customize Website",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Unique Product Showcase Site",
		category: "Customize Website",
		link: "/projects/project-3",
	},
];

/* Price Plan */
const customizeWebsitePricing = [
	{
		id: 1,
		plan: "Essential",
		price: [
			{ id: 1, value: 50 },
			{ id: 2, value: 10 },
		],
		features: [
			"Up to 5 Custom Pages",
			"Responsive Design",
			"Contact & Inquiry Forms",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Professional",
		price: [
			{ id: 1, value: 85 },
			{ id: 2, value: 18 },
		],
		features: [
			"10+ Pages with Custom Features",
			"API Integrations",
			"Admin Dashboard or CMS",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Enterprise",
		price: [
			{ id: 1, value: 120 },
			{ id: 2, value: 25 },
		],
		features: [
			"Fully Tailored Architecture",
			"Advanced Functional Modules",
			"Dedicated Maintenance & Support",
		],
		featureIcon,
		highlighted: false,
	},
];

/* Testimonials */
const customizeWebsiteTestimonials = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review:
			"Our custom website is a perfect match for our brand. The team nailed every feature we asked for — it's intuitive and powerful.",
		author: { name: "Alice Williams", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review:
			"They built exactly what we envisioned, with added touches we didn't even think of. Our workflow is now fully automated online!",
		author: { name: "Jane Smith", title: "CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review:
			"We needed a very specific booking and client system — and they delivered it beautifully. Totally recommend their custom work!",
		author: { name: "John Doe", title: "Business Owner" },
	},
];

/* FAQ */
const customizeWebsiteFaqGroups = [
	[
		{
			id: "faq-1",
			question: "What is a custom website?",
			answer:
				"A custom website is built from scratch to match your brand, features, and business goals—unlike template-based sites.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can I request specific features?",
			answer:
				"Yes! We build unique functionalities tailored to your workflow, such as booking systems, dashboards, or integrations.",
		},
		{
			id: "faq-3",
			question: "Will it be mobile-friendly?",
			answer:
				"Absolutely. All custom websites are designed to be fully responsive and work across devices.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you offer redesign services?",
			answer:
				"Yes, we can revamp your existing website into a fully customized version with modern design and functionality.",
		},
		{
			id: "faq-5",
			question: "Do you offer maintenance after launch?",
			answer:
				"Yes, we provide optional maintenance plans to keep your website secure, updated, and running smoothly.",
		},
		{
			id: "faq-6",
			question: "How is the pricing for a custom website decided?",
			answer:
				"Pricing is based on scope, number of features, pages, and integrations. We provide a quote after understanding your needs.",
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
					{ label: "Customize Website" },
				]}
			/>
			<About
				title="Custom Website Design Tailored to Your Brand"
				description="We build personalized websites from the ground up — crafted to meet your brand identity, workflow, and user experience goals. No templates, just 100% unique results."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Bespoke Designs That Match Your Vision" },
					{ icon: Icon5, text: "Custom Features Built for Your Needs" },
					{ icon: Icon5, text: "Secure & Scalable Architecture" },
					{ icon: Icon5, text: "Blazing Fast Load Performance" },
					{ icon: Icon5, text: "Smart Integrations & API Syncing" },
				]}
			/>
			<Prices
				pricingPlans={customizeWebsitePricing}
				sectionTitle="Flexible Pricing for Custom Projects"
			/>
			{/* <Projects
				title="Custom Website Projects We've Built"
				projectsData={customizeWebsiteProjects}
				viewAllLink="/projects"
			/> */}
			<PortfolioFilter />
			<Features title="Key Features" features={customizeWebsiteFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={customizeWebsiteServiceData} />
			<Testimonials data={customizeWebsiteTestimonials} />
			<Faq faqDataGroups={customizeWebsiteFaqGroups} />
		</>
	);
}

export default SingleService;
