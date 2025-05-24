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
import Prices from "@/components/service-page/price-plan-per-year";
import Icon5 from "@/public/images/service/icon5.png";
import AboutThumb from "@/public/images/services/webiste/large-business/about.jpg";

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

const largeBusinessFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Enterprise-Grade Design & Functionality",
	},
	{
		id: 2,
		icon: icon2,
		title: "Fully Responsive & Performance Optimized",
	},
	{
		id: 3,
		icon: icon3,
		title: "Scalable Architecture for Business Expansion",
	},
	{
		id: 4,
		icon: icon4,
		title: "Advanced Security & Compliance",
	},
	{
		id: 5,
		icon: icon5,
		title: "Integrated with Business-Critical Tools",
	},
	{
		id: 6,
		icon: icon6,
		title: "24/7 Uptime & Support Ready",
	},
];

/* Service Features */

const serviceData = {
	title: "Enterprise Web Design Strategy",
	shapeImage: Shape2,
	strategyTitle: "Strategic Design for Business Impact",
	strategyDescription:
		"We align your website with enterprise goals, enhancing performance, security, and user experience to support your digital transformation journey.",
	listItems: [
		[
			{ icon: Icon, text: "Data-Driven UX Decisions" },
			{ icon: Icon, text: "Scalable & Modular Design" },
			{ icon: Icon, text: "Robust Team Collaboration" },
		],
		[
			{ icon: Icon, text: "Security & Compliance Standards" },
			{ icon: Icon, text: "Agile Development Workflow" },
			{ icon: Icon, text: "Continuous Improvement & Testing" },
		],
	],
};

/* Projects */

const enterpriseProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Corporate Redesign for Tech Firm",
		category: "Enterprise Website",
		link: "/projects/tech-corporate-redesign",
	},
	{
		id: 2,
		image: thumb2,
		title: "Multi-Department Enterprise Portal",
		category: "Enterprise Website",
		link: "/projects/enterprise-portal",
	},
	{
		id: 3,
		image: thumb3,
		title: "Secure B2B E-commerce Solution",
		category: "Enterprise Website",
		link: "/projects/b2b-ecommerce",
	},
];

/* Price Plan */

const enterprisePricing = [
  {
    id: 1,
    plan: "Enterprise Basic",
    description: "Foundational plan for large-scale presence.",
    duration: "12 Months",
    pricePerYear: "4999",
    savings: "20.02%",
    originalPrice: "6250",
    payToday: "39990",
    renewsAt: "19995",
    gstNote: "*18% GST Extra",
    features: [
      "Responsive Enterprise Design",
      "Up to 15 Pages",
      "Corporate Branding Setup",
      "Advanced SEO Configuration",
      "Live Chat & Support Integration",
      "Multiple Admin Access",
      "Google Analytics & Tag Manager"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Enterprise Pro",
    description: "Optimized for complex business requirements.",
    duration: "12 Months",
    pricePerYear: "9999",
    originalPrice: "72000",
    savings: "26.4%",
    payToday: "52990",
    renewsAt: "24999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Enterprise Basic",
      "Up to 25 Pages",
      "CRM Integration",
      "On-page & Technical SEO",
      "High-Speed Hosting",
      "Weekly Backups",
      "Content Management Training"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "Enterprise Elite",
    description: "Ultimate package for large business scalability.",
    duration: "12 Months",
    pricePerYear: "14999",
    originalPrice: "95000",
    savings: "21%",
    payToday: "74990",
    renewsAt: "32999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Enterprise Pro",
      "Unlimited Pages",
      "ERP/Inventory System Integration",
      "AI Chatbot Setup",
      "Dedicated Account Manager",
      "Full Security Suite",
      "Multi-language Support"
    ],
    featureIcon,
    highlighted: false
  }
];

/* Testimonials */

const enterpriseTestimonials = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "The level of professionalism and scalability was unmatched. Our enterprise site is sleek, secure, and optimized for global access.",
		author: { name: "Nishant Shanker", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "From planning to execution, they handled everything with precision. The custom integrations made our internal workflows so much easier.",
		author: { name: "Jayendra Pandya", title: "CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 5,
		review: "Reliable, fast, and secure. Everything you'd want in an enterprise-grade website build. The ROI was immediate.",
		author: { name: "Sai Grover", title: "Business Owner" },
	},
];

/* FAQ */

const enterpriseFaqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What sets an enterprise website apart?",
			answer: "Enterprise websites are built for scale, performance, and security—ideal for businesses needing robust digital infrastructure and integrations.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Do you support third-party tool integrations?",
			answer: "Yes, we specialize in integrating with CRMs, ERPs, analytics tools, and marketing platforms to streamline business operations.",
		},
		{
			id: "faq-3",
			question: "Will the website meet compliance standards?",
			answer: "Absolutely. We ensure full compliance with data privacy regulations like GDPR, HIPAA, and others as required.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How do you handle scalability and future updates?",
			answer: "Our architecture supports modular upgrades and cloud-native scalability to keep your digital presence future-ready.",
		},
		{
			id: "faq-5",
			question: "Is support included after launch?",
			answer: "Yes, we offer post-launch maintenance and support packages tailored to enterprise-level service expectations.",
		},
		{
			id: "faq-6",
			question: "How is pricing structured for large businesses?",
			answer: "Pricing is based on the complexity, integration requirements, and ongoing support. We offer scalable plans with transparent rates.",
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
					{ label: "Large Business Website" }
				]}
			/>
			<About
				title="Custom Enterprise Websites That Scale with You"
				description="Powerful, scalable, and secure websites designed for large businesses and corporations. Built with high-performance architecture and tailored to enterprise needs."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Enterprise-Grade Performance" },
					{ icon: Icon5, text: "Custom Integrations & APIs" },
					{ icon: Icon5, text: "Reliable & Secure Infrastructure" },
					{ icon: Icon5, text: "Future-Proof Modular Design" },
					{ icon: Icon5, text: "Dedicated Enterprise Support" },
				]}
			/>
			<Prices pricingPlans={enterprisePricing} sectionTitle="Tailored Plans for Enterprise Growth" />
			{/* <Projects
				title="Our Enterprise-Level Projects"
				projectsData={enterpriseProjects}
				viewAllLink="/projects"
			/> */}
			<PortfolioFilter />
			<Features title="Key Features for Large Businesses" features={largeBusinessFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={enterpriseTestimonials} />
			<Faq faqDataGroups={enterpriseFaqDataGroups} />
		</>
	);
}

export default SingleService;
