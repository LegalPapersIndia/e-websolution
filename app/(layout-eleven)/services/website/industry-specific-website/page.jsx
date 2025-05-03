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
import AboutThumb from "@/public/images/services/webiste/industry-based/about.jpg";

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

const industryFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Tailored Industry-Specific Designs",
	},
	{
		id: 2,
		icon: icon2,
		title: "Responsive & Accessible on All Devices",
	},
	{
		id: 3,
		icon: icon3,
		title: "Compliance with Industry Standards",
	},
	{
		id: 4,
		icon: icon4,
		title: "Optimized for Search & Performance",
	},
	{
		id: 5,
		icon: icon5,
		title: "Easy Content Management System",
	},
	{
		id: 6,
		icon: icon6,
		title: "Integration with Sector-Specific Tools",
	},
];

/* Service Features */

const serviceData = {
	title: "How We Approach Industry Website Design",
	shapeImage: Shape2,
	strategyTitle: "Industry-Focused Web Design Strategies",
	strategyDescription:
		"We build websites that understand and solve real-world needs of your industry—whether it's showcasing agricultural products, managing patient data, or promoting fashion collections.",
	listItems: [
		[
			{ icon: Icon, text: "Research-driven planning" },
			{ icon: Icon, text: "UX tailored to industry users" },
			{ icon: Icon, text: "Scalable for future demands" },
		],
		[
			{ icon: Icon, text: "Secure architecture & compliance" },
			{ icon: Icon, text: "Cross-platform compatibility" },
			{ icon: Icon, text: "Custom tool & API integration" },
		],
	],
};

/* Projects */

const industryProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Agri Business Platform",
		category: "Agriculture",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Online Pharma Portal",
		category: "Pharmaceuticals",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Garment Showcase Website",
		category: "Fashion & Clothing",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const industryPricing = [
	{
		id: 1,
		plan: "Basic Industry Site",
		price: [
			{ id: 1, value: 60 },
			{ id: 2, value: 15 },
		],
		features: [
			"Customized Industry Template",
			"Responsive Layout",
			"Contact & Inquiry Forms",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Standard Industry Site",
		price: [
			{ id: 1, value: 90 },
			{ id: 2, value: 25 },
		],
		features: [
			"CMS Integration",
			"Product or Service Pages",
			"SEO & Speed Optimization",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Advanced Enterprise Site",
		price: [
			{ id: 1, value: 140 },
			{ id: 2, value: 35 },
		],
		features: [
			"Custom Features & APIs",
			"Industry-Specific Tool Integration",
			"Extended Support & Maintenance",
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
		review: "They built a beautiful, easy-to-manage site for our farming business. It perfectly reflects our brand and has helped us reach more customers online.",
		author: { name: "Ravi Mehta", title: "Agritech Entrepreneur" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "We needed a pharma-compliant platform with easy product search. The result exceeded our expectations!",
		author: { name: "Dr. Priya S.", title: "Pharma Director" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Our clothing store now has a stylish online presence. The website is both fast and intuitive, and customers love it!",
		author: { name: "Aman Gill", title: "Clothing Brand Owner" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "Do you customize websites for specific industries?",
			answer: "Yes, every site is designed with your industry’s needs, audience, and standards in mind—from layout to functionality.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can you integrate tools specific to my field?",
			answer: "Absolutely. Whether it’s CRM, booking systems, inventory tools, or compliance platforms—we handle integration seamlessly.",
		},
		{
			id: "faq-3",
			question: "Will the site follow industry compliance standards?",
			answer: "Yes. We build in accordance with relevant regulations, like HIPAA for healthcare or GDPR for data protection.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Can you write industry-specific content?",
			answer: "We offer copywriting services tailored to your field, with SEO and brand voice alignment.",
		},
		{
			id: "faq-5",
			question: "Will my team be able to manage the site after delivery?",
			answer: "Yes. We provide training and easy-to-use CMS setups so your team can take control confidently.",
		},
		{
			id: "faq-6",
			question: "What’s the average turnaround time?",
			answer: "Most industry-specific websites take 3–5 weeks, depending on content and feature complexity.",
			show: true,
		},
	],
];

function IndustrySpecificService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "Industry Specific Website" }
				]}
			/>
			<About
				title="Industry-Tailored Website Design Services"
				description="We design websites tailored to the unique demands of your industry—agriculture, pharma, fashion, and more. Every site is optimized for your audience, goals, and tools."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Industry-Relevant Layout & UX" },
					{ icon: Icon5, text: "Standards-Compliant Design" },
					{ icon: Icon5, text: "Tool & Feature Customization" },
					{ icon: Icon5, text: "Easy-to-Use CMS" },
					{ icon: Icon5, text: "Support for Future Growth" },
				]}
			/>
			<Features title="Key Features" features={industryFeatures} />
			{/* <AutoSlider /> */}
			<Prices pricingPlans={industryPricing} sectionTitle="Pricing That Matches Your Industry Needs" />
			<SingleServiceDetails serviceData={serviceData} />
			<Projects
				title="Industry Websites We've Delivered"
				projectsData={industryProjects}
				viewAllLink="/projects"
			/>
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default IndustrySpecificService;
