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
		plan: "Ecom Start",
		description: "Perfect for launching your first online store.",
		duration: "12 Months",
		pricePerYear: "4999",
		originalPrice: "50000",
		savings: "20.04%",
		payToday: "39990",
		renewsAt: "17995",
		gstNote: "*18% GST Extra",
		features: [
			{
				heading: "Features",
				items: [
					{ label: "Web Pages - 5", included: true },
					{ label: "Template Based", included: true },
					{ label: "No Optimisation", included: true }
				]
			},
			{
				heading: "Web Pages",
				items: [
					{ label: "Home", included: true },
					{ label: "About", included: true },
					{ label: "Contact", included: true },
					{ label: "Photo Gallery", included: true },
					{ label: "Inner Pages (Product/Service) - 1 Page Only", included: true },
					{ label: "Enquiry Form", included: true },
					{ label: "Shopping Cart & Checkout Process", included: false },
				]
			},
			{
				heading: "Additional Pages (Optional)",
				items: [
					{ label: "Testimonials", included: false },
					{ label: "FAQs", included: false },
					{ label: "Social Media Links", included: false },
					{ label: "Whatsapp Integration", included: false },
					{ label: "Live Chat Integration", included: false },
					{ label: "Clientele (Show Logos)", included: false },
					{ label: "Video Gallery (Embed YT Videos)", included: false },
					{ label: "Google Map on Contact Us", included: false },
					{ label: "Policy Page", included: false },
					{ label: "Blog", included: false },
				]
			},
			{
				heading: "Package Includes",
				items: [
					{ label: "Free Domain Name", included: false },
					{ label: "Admin Panel", included: false },
					{ label: "Total Image Upload Limit - 25 Images", included: true },
					{ label: "Free Web Shared Hosting", included: true },
					{ label: "1-Free POP Email ID", included: true },
					{ label: "2-Home Page Banner Slideshow", included: true },
					{ label: "Mobile Responsive", included: true },
					{ label: "Free Live Chat Integration", included: true },
					{ label: "Newsletter Signup Form", included: false },
				]
			},
			{
				heading: "Basic On Page SEO",
				items: [
					{ label: "SEO-friendly URLs", included: true },
					{ label: "Meta Title", included: true },
					{ label: "Meta Description", included: false },
					{ label: "Meta Keywords", included: false },
					{ label: "Content Writing - AI Generated", included: true }
				]
			},
			{
				heading: "Additional Features",
				items: [
					{ label: "Google Analytics Integration", included: false },
					{ label: "Google Search Console Integration", included: false },
					{ label: "HTML Sitemap Page", included: false },
					{ label: "XML Sitemap", included: false }
				]
			},
			{
				heading: "Customer Support",
				items: [
					{ label: "Phone (IST 10am-6pm) - Mon-Fri", included: true },
					{ label: "Email (24x7)", included: true }
				]
			},
			{
				heading: "Delivery",
				items: [
					{ label: "Delivery Time - 7 Working Days", included: true }
				]
			}
		],
		featureIcon,
		highlighted: false
	},
	{
		id: 2,
		plan: "Ecom Growth",
		description: "Advanced solution for growing online businesses.",
		duration: "12 Months",
		pricePerYear: "9999",
		originalPrice: "72000",
		savings: "23.61%",
		payToday: "54990",
		renewsAt: "19995",
		gstNote: "*18% GST Extra",
		features: [
			{
				heading: "Features",
				items: [
					{ label: "Web Pages - 10", included: true },
					{ label: "Template Based", included: true },
					{ label: "No Optimisation", included: true }
				]
			},
			{
				heading: "Web Pages",
				items: [
					{ label: "Home", included: true },
					{ label: "About", included: true },
					{ label: "Contact", included: true },
					{ label: "Photo Gallery", included: true },
					{ label: "Inner Pages (Product/Service) - Up to 5 Pages", included: true },
					{ label: "Enquiry Form", included: true },
					{ label: "Signup/Login", included: true },
					{ label: "Shopping Cart & Checkout Process", included: false },
				]
			},
			{
				heading: "Additional Pages (Optional)",
				items: [
					{ label: "Testimonials", included: true },
					{ label: "FAQs", included: true },
					{ label: "Social Media Links", included: true },
					{ label: "Whatsapp Integration", included: true },
					{ label: "Live Chat Integration", included: false },
					{ label: "Clientele (Show Logos)", included: false },
					{ label: "Video Gallery (Embed YT Videos)", included: false },
					{ label: "Google Map on Contact Us", included: false },
					{ label: "Policy Page", included: false },
					{ label: "Blog", included: false }
				]
			},
			{
				heading: "Package Includes",
				items: [
					{ label: "Free Domain Name", included: false },
					{ label: "Admin Panel", included: false },
					{ label: "Total Image Upload Limit - 50 Images", included: true },
					{ label: "Free Web Shared Hosting", included: true },
					{ label: "2-Free POP Email ID", included: true },
					{ label: "3-Home Page Banner Slideshow", included: true },
					{ label: "Mobile Responsive", included: true },
					{ label: "Free Live Chat Integration", included: true },
					{ label: "Newsletter Signup Form", included: false }
				]
			},
			{
				heading: "Basic On Page SEO",
				items: [
					{ label: "SEO-friendly URLs", included: true },
					{ label: "Meta Title", included: true },
					{ label: "Meta Description", included: true },
					{ label: "Meta Keywords", included: false },
					{ label: "Content Writing - AI Generated", included: true }
				]
			},
			{
				heading: "Additional Features",
				items: [
					{ label: "Google Analytics Integration", included: false },
					{ label: "Google Search Console Integration", included: false },
					{ label: "HTML Sitemap Page", included: true },
					{ label: "XML Sitemap", included: true }
				]
			},
			{
				heading: "Customer Support",
				items: [
					{ label: "Phone (IST 10am-6pm) - Mon-Fri", included: true },
					{ label: "Email (24x7)", included: true }
				]
			},
			{
				heading: "Delivery",
				items: [
					{ label: "Delivery Time - 10 Working Days", included: true }
				]
			}
		],
		featureIcon,
		highlighted: true
	},
	{
		id: 3,
		plan: "Ecom Pro",
		description: "Enterprise-grade e-commerce experience with full automation.",
		duration: "12 Months",
		pricePerYear: "14999",
		originalPrice: "100000",
		savings: "20.01%",
		payToday: "79990",
		renewsAt: "29995",
		gstNote: "*18% GST Extra",
		features: [
			{
				heading: "Features",
				items: [
					{ label: "Web Pages - 20", included: true },
					{ label: "Template Based / Customizable", included: true },
					{ label: "Optimisable (To Some Extent)", included: true }
				]
			},
			{
				heading: "Web Pages",
				items: [
					{ label: "Home", included: true },
					{ label: "About", included: true },
					{ label: "Contact", included: true },
					{ label: "Photo Gallery", included: true },
					{ label: "Inner Pages (Product/Service) - Up to 10 Pages", included: true },
					{ label: "Enquiry Form", included: true },
					{ label: "Signup/Login", included: true },
					{ label: "Shopping Cart & Checkout Process", included: true },
				]
			},
			{
				heading: "Additional Pages (Optional)",
				items: [
					{ label: "Testimonials", included: true },
					{ label: "FAQs", included: true },
					{ label: "Social Media Links", included: true },
					{ label: "Whatsapp Integration", included: true },
					{ label: "Live Chat Integration", included: true },
					{ label: "Clientele (Show Logos)", included: true },
					{ label: "Video Gallery (Embed YT Videos)", included: true },
					{ label: "Google Map on Contact Us", included: true },
					{ label: "Policy Page", included: true },
					{ label: "Blog", included: true }
				]
			},
			{
				heading: "Package Includes",
				items: [
					{ label: "Free Domain Name", included: false },
					{ label: "Admin Panel", included: true },
					{ label: "Total Image Upload Limit - 125 Images", included: true },
					{ label: "Free Web Shared Hosting", included: true },
					{ label: "3-Free POP Email ID", included: true },
					{ label: "4-Home Page Banner Slideshow", included: true },
					{ label: "Mobile Responsive", included: true },
					{ label: "Free Live Chat Integration", included: true },
					{ label: "Newsletter Signup Form", included: true }
				]
			},
			{
				heading: "Basic On Page SEO",
				items: [
					{ label: "SEO-friendly URLs", included: true },
					{ label: "Meta Title", included: true },
					{ label: "Meta Description", included: true },
					{ label: "Meta Keywords", included: true },
					{ label: "Content Writing - AI Generated", included: true }
				]
			},
			{
				heading: "Additional Features",
				items: [
					{ label: "Google Analytics Integration", included: true },
					{ label: "Google Search Console Integration", included: true },
					{ label: "HTML Sitemap Page", included: true },
					{ label: "XML Sitemap", included: true }
				]
			},
			{
				heading: "Customer Support",
				items: [
					{ label: "Phone (IST 10am-6pm) - Mon-Fri", included: true },
					{ label: "Email (24x7)", included: true }
				]
			},
			{
				heading: "Delivery",
				items: [
					{ label: "Delivery Time - 15 Working Days", included: true }
				]
			}
		],
		featureIcon,
		highlighted: false
	}
];

/* Testimonials */

const ecommerceTestimonials = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Our online sales skyrocketed after launching the new e-commerce site! Seamless experience and excellent support throughout.",
		author: { name: "Sunil Pandey", title: "Fashion Retailer" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "From design to launch, the process was smooth. Our customers love the intuitive layout and fast checkout experience.",
		author: { name: "Shri Gupta", title: "Gadget Store Owner" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "They built a powerful backend for managing inventory and orders. Highly recommend for serious online sellers!",
		author: { name: "Raghav Patel", title: "Health & Beauty Brand" },
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
