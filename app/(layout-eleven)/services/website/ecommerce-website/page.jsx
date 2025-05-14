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
import AboutThumb from "@/public/images/services/webiste/ecommerce/about.jpg";

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

const ecommerceFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Custom Shopping Cart Design",
	},
	{
		id: 2,
		icon: icon2,
		title: "Mobile-Optimized Storefronts",
	},
	{
		id: 3,
		icon: icon3,
		title: "Secure Payment Gateway Integration",
	},
	{
		id: 4,
		icon: icon4,
		title: "High-Speed Performance",
	},
	{
		id: 5,
		icon: icon5,
		title: "Inventory & Order Management",
	},
	{
		id: 6,
		icon: icon6,
		title: "Marketing & SEO Ready",
	},
];

/* Service Features */

const ecommerceServiceData = {
	title: "Our E-commerce Website Strategy",
	shapeImage: Shape2,
	strategyTitle: "E-commerce Development Strategies",
	strategyDescription:
		"Delivering online shopping experiences that convert—focused on user experience, performance, and seamless integration with payment and shipping systems.",
	listItems: [
		[
			{ icon: Icon, text: "Product-focused UX design" },
			{ icon: Icon, text: "Sales funnel optimization" },
			{ icon: Icon, text: "Mobile-first architecture" },
		],
		[
			{ icon: Icon, text: "Custom payment solutions" },
			{ icon: Icon, text: "Analytics and tracking" },
			{ icon: Icon, text: "Conversion rate enhancements" },
		],
	],
};

/* Projects */

const ecommerceProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Fashion Storefront",
		category: "E-commerce",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Electronics Shop",
		category: "E-commerce",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Beauty & Wellness Store",
		category: "E-commerce",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const ecommercePricing = [
	{
		id: 1,
		plan: "Starter Store",
		price: [
			{ id: 1, value: 120 },
			{ id: 2, value: 30 },
		],
		features: [
			"Up to 20 Products",
			"Payment Gateway Integration",
			"Mobile-Friendly Design",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: 2,
		plan: "Growth Store",
		price: [
			{ id: 1, value: 180 },
			{ id: 2, value: 45 },
		],
		features: [
			"Unlimited Products",
			"Advanced Filtering & Sorting",
			"Customer Account Management",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: 3,
		plan: "Enterprise Store",
		price: [
			{ id: 1, value: 250 },
			{ id: 2, value: 70 },
		],
		features: [
			"Custom Functionality",
			"Multi-Vendor & Wholesale Setup",
			"Ongoing Priority Support",
		],
		featureIcon,
		highlighted: false,
	},
];

/* Testimonials */

const ecommerceTestimonials = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Our online sales skyrocketed after launching the new e-commerce site! Seamless experience and excellent support throughout.",
		author: { name: "Emily Carter", title: "Fashion Retailer" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "From design to launch, the process was smooth. Our customers love the intuitive layout and fast checkout experience.",
		author: { name: "Daniel Lee", title: "Gadget Store Owner" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "They built a powerful backend for managing inventory and orders. Highly recommend for serious online sellers!",
		author: { name: "Sophia Patel", title: "Health & Beauty Brand" },
	},
];

/* FAQ */

const ecommerceFaqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What platform will my e-commerce website be built on?",
			answer: "We use flexible platforms like WooCommerce, Shopify, or custom React/Next.js builds depending on your needs.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Can I manage products and orders myself?",
			answer: "Absolutely. We provide admin dashboards with full control over products, orders, shipping, and more.",
		},
		{
			id: "faq-3",
			question: "Is my payment information secure?",
			answer: "Yes! We integrate PCI-compliant payment gateways with SSL encryption to ensure top-level security.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you support international sales?",
			answer: "Yes, we can implement multi-currency, regional shipping, and language support for global stores.",
		},
		{
			id: "faq-5",
			question: "Will the website be optimized for SEO?",
			answer: "Yes, we include on-page SEO, structured data, and fast load times to help your store rank higher.",
		},
		{
			id: "faq-6",
			question: "What if I need help after launch?",
			answer: "We offer maintenance plans, updates, and ongoing support to ensure your store performs long-term.",
			show: true,
		},
	],
];

function EcommerceWebsiteService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "E-commerce Website" }
				]}
			/>
			<About
				title="Robust E-commerce Websites That Drive Sales"
				description="We craft high-converting online stores tailored to your brand—fully secure, mobile-optimized, and ready for growth. From product displays to checkout, every detail is designed for success."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Customized Online Storefronts" },
					{ icon: Icon5, text: "Secure & Fast Checkout Integration" },
					{ icon: Icon5, text: "Mobile-Optimized User Experience" },
					{ icon: Icon5, text: "Inventory & Order Management" },
					{ icon: Icon5, text: "Scalable for Future Expansion" },
				]}
			/>
			<Prices pricingPlans={ecommercePricing} sectionTitle="Flexible Pricing for Every E-commerce Need" />
			<Projects
				title="Our E-commerce Website Projects"
				projectsData={ecommerceProjects}
				viewAllLink="/projects"
			/>
			<PortfolioFilter />
			<Features title="Key Features" features={ecommerceFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={ecommerceServiceData} />
			<Testimonials data={ecommerceTestimonials} />
			<Faq faqDataGroups={ecommerceFaqDataGroups} />
		</>
	);
}

export default EcommerceWebsiteService;
