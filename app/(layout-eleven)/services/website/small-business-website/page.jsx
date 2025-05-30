// import AutoSlider from "@/components/common/auto-slider";
// import Banner from "@/public/images/services/web-develoment/banner1.jpg";
// import Thumb from "@/public/images/v10/thumb1v10.png";
// import Hero from "@/components/home/home-ten/hero";
// import About from "@/components/service-page/about";
// import BreadCrumb from "@/components/common/Breadcrumb";
// import Faq from "@/components/home/home-five/faq";
// import SingleServiceDetails from "@/components/service-page/web-dev";
// import Projects from "@/components/home/home-eight/projects";
// import Features from "@/components/home/home-two/services";
// import Testimonials from "@/components/home/home-eight/testimonials";
// import Prices from "@/components/home/home-eight/price-plan";

// export const metadata = {
// 	title: "Best Web Designing Agency in Delhi",
// 	description: "Best Web Designing Agency in Delhi",
// };
// function SingleService() {
// 	return (
// 		<>
// 			<BreadCrumb title="Small Business Website" bgImage={Banner} />
// 			{/* <Hero serviceId={1} imageSrc={Thumb} /> */}
// 			<About />
// 			<Features />
// 			<AutoSlider />
// 			<SingleServiceDetails />
// 			<Projects />
// 			<Prices />
// 			<Testimonials />
// 			<Faq />
// 		</>
// 	);
// }

// export default SingleService;


import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/web-develoment/banner1.jpg";
import Thumb from "@/public/images/v10/thumb1v10.png";
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
import AboutThumb from "@/public/images/services/webiste/small-business/about.jpg";

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

const smallBusinessFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Tailored for Small Business",
		description: "Get a site that reflects your goals and speaks directly to your customers.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Conversion-Optimized Design",
		description: "Turn more visitors into leads and paying customers.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Fast & SEO-Ready",
		description: "Quick load times and search engine friendly out of the box.",
	},
	{
		id: 4,
		icon: icon4,
		title: "Fast & SEO-Ready",
		description: "Quick load times and search engine friendly out of the box.",
	},
	{
		id: 5,
		icon: icon5,
		title: "Fast & SEO-Ready",
		description: "Quick load times and search engine friendly out of the box.",
	},
	{
		id: 6,
		icon: icon6,
		title: "Fast & SEO-Ready",
		description: "Quick load times and search engine friendly out of the box.",
	},
];

/* Service Features */

const serviceData = {
	title: "How our agency provides Web Design services",
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
		category: "Development",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Project 2",
		category: "Development",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Project 3",
		category: "Development",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const smallBusinessPricing = [
	{
		id: 1,
		plan: "Starter Biz",
		description: "Essential package for small businesses.",
		duration: "12 Months",
		pricePerYear: "4999",
		savings: "29.2%",
		originalPrice: "7,060",
		payToday: "16990",
		renewsAt: "9999",
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
		plan: "Growth Biz",
		description: "Smart choice for growing small enterprises.",
		duration: "12 Months",
		pricePerYear: "9999",
		savings: "23%",
		originalPrice: "12,985",
		payToday: "29990",
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
		plan: "Pro Biz",
		description: "Comprehensive package for maximum growth.",
		duration: "12 Months",
		pricePerYear: "14999",
		savings: "21.5%",
		originalPrice: "19,098",
		payToday: "39990",
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
		review: "Tailored testimonial for this service page.",
		author: { name: "Nishant Shanker", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image2,
		rating: 4,
		review: "Another satisfied customer with specific feedback.",
		author: { name: "Jayendra Pandya", title: "CEO" },
	},
	{
		id: 3,
		image: image3,
		rating: 5,
		review: "Top-notch services that helped scale our operations.",
		author: { name: "Sai Grover", title: "Business Owner" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "How can I get started with your service?",
			answer: "You can get started by contacting us or signing up through our website. We'll guide you through every step.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Do you offer custom packages?",
			answer: "Yes, we tailor our packages based on your specific business needs and goals.",
		},
		{
			id: "faq-3",
			question: "What industries do you work with?",
			answer: "We work with a variety of industries including agriculture, pharma, garments, and more.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How long does it take to build a website?",
			answer: "Timelines vary based on complexity, but most websites are completed within 2-4 weeks.",
		},
		{
			id: "faq-5",
			question: "Can you manage my digital marketing too?",
			answer: "Absolutely! We provide full digital marketing solutions including SEO, Ads, and Social Media Management.",
		},
		{
			id: "faq-6",
			question: "Is support included after launch?",
			answer: "Yes, we offer ongoing support and maintenance after your project is live.",
			show: true,
		},
	],
];

function SingleService() {
	return (
		<>
			{/* <BreadCrumb title="Small Business Website" bgImage={Banner} /> */}
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services", href: "/service" },
					{ label: "Small Business Website" }
				]}
			/>
			<About
				title="Boost Your Business with Expert Website Design Solutions"
				description="Experience unparalleled business progress with Sofax. Our expert team leverages cutting-edge strategies to propel your brand forward."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Affordable, high-performance small business websites" },
					{ icon: Icon5, text: "Mobile-optimized and SEO-friendly design" },
					{ icon: Icon5, text: "Tailored UI/UX for your brand" },
					{ icon: Icon5, text: "Quick turnaround with premium support" },
					{ icon: Icon5, text: "Integrated marketing tools for growth" },
				]}
			/>
			<Prices pricingPlans={smallBusinessPricing} sectionTitle="Affordable Pricing for Small Businesses" />
			{/* <Projects
				title="Our Recent Small Business Website Projects"
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
