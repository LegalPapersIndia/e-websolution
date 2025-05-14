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
import Prices from "@/components/service-page/price-plan";
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
    id: 4,
    plan: "Starter Biz",
    description: "Essential package for small businesses.",
    duration: "12 Month",
    pricePerMonth: "1416",
    originalPrice: "24000",
    savings: "29.2%",
    payToday: "16990",
    renewsAt: "9999",
    gstNote: "*18% GST Extra",
    features: [
      "Mobile-Friendly Design",
      "Up to 5 Pages",
      "Logo Integration",
      "Basic SEO Setup",
      "Contact Form & Google Maps",
      "1 Business Email",
      "WhatsApp Integration"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 5,
    plan: "Growth Biz",
    description: "Smart choice for growing small enterprises.",
    duration: "12 Month",
    pricePerMonth: "2333",
    originalPrice: "39000",
    savings: "23%",
    payToday: "29990",
    renewsAt: "14999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Starter",
      "Up to 10 Pages",
      "Image Gallery",
      "Call-to-Action Buttons",
      "Live Chat Integration",
      "Google Analytics Setup",
      "Monthly Backups"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 6,
    plan: "Pro Biz",
    description: "Comprehensive package for maximum growth.",
    duration: "12 Month",
    pricePerMonth: "3250",
    originalPrice: "51000",
    savings: "21.5%",
    payToday: "39990",
    renewsAt: "19999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Growth",
      "Unlimited Pages",
      "Custom Forms",
      "E-commerce Readiness",
      "Advanced SEO Tools",
      "24/7 Phone & Email Support",
      "Performance Optimization"
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
		author: { name: "Alice Williams", title: "Startup Founder" },
	},
	{
		id: 2,
		image: image2,
		rating: 4,
		review: "Another satisfied customer with specific feedback.",
		author: { name: "John Doe", title: "Business Owner" },
	},
	{
		id: 3,
		image: image3,
		rating: 5,
		review: "Top-notch services that helped scale our operations.",
		author: { name: "Jane Smith", title: "CEO" },
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
