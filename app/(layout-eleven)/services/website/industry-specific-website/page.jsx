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
import PortfolioFilter from "@/components/project-filter/PortfolioFilter";

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
		plan: "Industry Basic",
		description: "Tailored for niche industries getting started online.",
		duration: "12 Months",
		pricePerYear: "4999",
		originalPrice: "60000",
		savings: "16.7%",
		payToday: "44990",
		renewsAt: "19995",
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
		plan: "Industry Advance",
		description: "Smart solution for businesses requiring functional depth.",
		duration: "12 Months",
		pricePerYear: "9999",
		originalPrice: "75000",
		savings: "26.67%",
		payToday: "54990",
		renewsAt: "24995",
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
		plan: "Industry Elite",
		description: "Comprehensive, branded experience with high-end features.",
		duration: "12 Months",
		pricePerYear: "14999",
		originalPrice: "105000",
		savings: "23.82%",
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
		author: { name: "Dr. Mahesh S.", title: "Pharma Director" },
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
			<Prices pricingPlans={industryPricing} sectionTitle="Pricing That Matches Your Industry Needs" />
			{/* <Projects
				title="Industry Websites We've Delivered"
				projectsData={industryProjects}
				viewAllLink="/projects"
			/> */}
			<PortfolioFilter />
			<Features title="Key Features" features={industryFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default IndustrySpecificService;
