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
		plan: "Custom Basic",
		description: "Tailored layout and features for unique business needs.",
		duration: "12 Months",
		pricePerYear: "4999",
		originalPrice: "45000",
		savings: "25.35%",
		payToday: "31990",
		renewsAt: "15995",
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
		plan: "Custom Pro",
		description: "Advanced customization for complex website structures.",
		duration: "12 Months",
		pricePerYear: "9999",
		originalPrice: "60000",
		savings: "22.51%",
		payToday: "46500",
		renewsAt: "18995",
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
		plan: "Custom Enterprise",
		description: "Full-scale web customization for enterprise-level businesses.",
		duration: "12 Months",
		pricePerYear: "14999",
		originalPrice: "85000",
		savings: "23.53%",
		payToday: "64990",
		renewsAt: "24995",
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
