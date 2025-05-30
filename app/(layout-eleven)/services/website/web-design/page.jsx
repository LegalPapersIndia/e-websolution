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
import PortfolioFilter from "@/components/project-filter/PortfolioFilter";
import Prices from "@/components/service-page/price-plan-per-year";
import Icon5 from "@/public/images/service/icon5.png";
import AboutThumb from "@/public/images/services/webiste/web-design/about.jpg";

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

const smallBusinessFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Unique, Brand-Focused Designs",
	},
	{
		id: 2,
		icon: icon2,
		title: "Mobile-Responsive & User-Friendly",
	},
	{
		id: 3,
		icon: icon3,
		title: "Scalable for Future Growth",
	},
	{
		id: 4,
		icon: icon4,
		title: "Fast Loading Speeds",
	},
	{
		id: 5,
		icon: icon5,
		title: "Built-In Security Features",
	},
	{
		id: 6,
		icon: icon6,
		title: "Seamless Tool Integration",
	},
];

/* Service Features */

const serviceData = {
	title: "Why Choose Us",
	shapeImage: Shape2,
	strategyTitle: "Web Design strategies",
	strategyDescription:
		"The broader context of a project aligning to design decisions with business goals & creating roadmap for achieving optimal user experiences.",
	listItems: [
		[
			{ icon: Icon, text: "Measurement & analytics" },
			{ icon: Icon, text: "User-centered approach" },
			{ icon: Icon, text: "Personal development" },
		],
		[
			{ icon: Icon, text: "Wireframing & prototyping" },
			{ icon: Icon, text: "Stakeholder alignment" },
			{ icon: Icon, text: "Iterative improvement" },
		],
	],
};

/* Projects */

const customProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Project 1",
		category: "Web Design",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Project 2",
		category: "Web Design",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Project 3",
		category: "Web Design",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const smallBusinessPricing = [
	{
		id: 1,
		plan: "Starter Plan",
		description: "Ideal for new or small businesses looking to establish an online presence.",
		duration: "1 Year",
		pricePerYear: 4999,
		originalPrice: 6999,
		savings: "29%",
		payToday: 4999,
		renewsAt: 4999,
		gstNote: "18% GST extra",
		highlighted: false,
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
		plan: "Pro Design",
		description: "Ideal for startups and small businesses.",
		duration: "12 Months",
		pricePerYear: "9999",
		originalPrice: "13845",
		savings: "27.8%",
		payToday: "25999",
		renewsAt: "14999",
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
		plan: "Premium Design",
		description: "Best for growing brands and agencies.",
		duration: "12 Months",
		pricePerYear: "14999",
		originalPrice: "20250",
		savings: "25.9%",
		payToday: "39999",
		renewsAt: "19999",
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
		review: "Incredible experience! Our website looks amazing, and the team made sure it aligns perfectly with our brand and goals.",
		author: { name: "Nishant Shanker", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "Fast, secure, and user-friendly! The team truly understood our needs and delivered a site that works for our customers and business.",
		author: { name: "Jayendra Pandya", title: "CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "The website redesign helped boost our conversion rates significantly. The process was smooth and the results speak for themselves!",
		author: { name: "Sai Grover", title: "Business Owner" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What makes the website design unique?",
			answer: "We create custom, user-focused designs that align with your business goals and grow with your needs.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How long does it take to design a website?",
			answer: "The timeline varies based on complexity, but typically, we complete a website in 2-3 weeks.",
		},
		{
			id: "faq-3",
			question: "Will my website be mobile-friendly?",
			answer: "Yes! All our designs are fully responsive and optimized for all devices.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Can you redesign my existing website?",
			answer: "Absolutely! We offer complete redesigns to enhance functionality, aesthetics, and user experience.",
		},
		{
			id: "faq-5",
			question: "Do you provide ongoing website maintenance?",
			answer: "Yes, we offer ongoing support and maintenance to ensure your site runs smoothly.",
		},
		{
			id: "faq-6",
			question: "How much does a website design cost?",
			answer: "Pricing depends on the scope and features, but we offer transparent quotes based on your needs.",
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
					{ label: "Website Design" }
				]}
			/>
			<About
				title="Professional Website Design That Grows with Your Business"
				description="Custom-designed websites that reflect your brand and work flawlessly on all devices. Fast, secure, and built to grow with your business."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Custom Designs That Reflect Your Brand" },
					{ icon: Icon5, text: "Scalable Layouts for Business Growth" },
					{ icon: Icon5, text: "Secure and Reliable Website Structure" },
					{ icon: Icon5, text: "Lightning-Fast Page Load Times" },
					{ icon: Icon5, text: "Smooth Integration with Essential Tools" },
				]}
			/>
			<Prices pricingPlans={smallBusinessPricing} sectionTitle="Affordable Pricing for Small Businesses" />
			{/* <Projects
				title="Our Recent Website Designs"
				projectsData={customProjects}
				viewAllLink="/projects"
			/> */}
			<PortfolioFilter />
			<Features title="Key Features" features={smallBusinessFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
