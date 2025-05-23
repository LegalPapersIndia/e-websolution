import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/social-media-marketing/banner.jpg";
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
import AboutThumb from "@/public/images/services/digital/seo/about.jpg";

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

const seoMarketingFeatures = [
	{ id: 1, icon: icon1, title: "On-Page & Off-Page SEO Optimization" },
	{ id: 2, icon: icon2, title: "Technical SEO Enhancements" },
	{ id: 3, icon: icon3, title: "Mobile-First Optimization" },
	{ id: 4, icon: icon4, title: "Keyword Research & Competitor Analysis" },
	{ id: 5, icon: icon5, title: "Backlink Building Strategy" },
	{ id: 6, icon: icon6, title: "Content Optimization & SEO Copywriting" },
];

/* Service Features */

const serviceData = {
	title: "Our SEO Marketing Approach",
	shapeImage: Shape2,
	strategyTitle: "SEO Strategies That Work",
	strategyDescription:
		"Every business has unique SEO needs. We craft tailored strategies based on your industry, competition, and business goals to help your site rank higher and convert better.",
	listItems: [
		[
			{ icon: Icon, text: "Detailed SEO Audit & Reporting" },
			{ icon: Icon, text: "Competitor Benchmarking" },
			{ icon: Icon, text: "On-Page Content Optimization" },
		],
		[
			{ icon: Icon, text: "Link Building & Outreach" },
			{ icon: Icon, text: "Local SEO & Google My Business" },
			{ icon: Icon, text: "Performance Monitoring & Reporting" },
		],
	],
};

/* Projects */

const seoProjects = [
	{
		id: 1,
		image: thumb1,
		title: "SEO for E-Commerce Website",
		category: "SEO Marketing",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Local SEO for Dental Clinic",
		category: "SEO Marketing",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "B2B SEO for IT Company",
		category: "SEO Marketing",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const seoPricingPlans = [
  {
    id: 1,
    plan: "Bronze",
    description: "Perfect for startups looking to get visibility.",
    duration: "12 Month",
    pricePerMonth: "14999",
    originalPrice: "22510",
    savings: "33.36%",
    payToday: "179988",
    renewsAt: "89994",
    gstNote: "*18% GST Extra",
    features: [
      "Keyword Research (10 Keywords)",
      "Basic On-Page SEO",
      "Meta Tags Optimization",
      "Monthly Ranking Report",
      "Google Analytics Setup",
      "1 Blog/Month",
      "Mobile Optimization"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "Silver",
    description: "Great for growing businesses aiming for local SEO impact.",
    duration: "12 Month",
    pricePerMonth: "29999",
    originalPrice: "40000",
    savings: "25.02%",
    payToday: "359988",
    renewsAt: "179994",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Bronze",
      "20 Targeted Keywords",
      "Local SEO Setup",
      "Advanced On-Page SEO",
      "Google My Business Optimization",
      "2 Blogs/Month",
      "Technical SEO Audit"
    ],
    featureIcon,
    highlighted: true // Recommended
  },
  {
    id: 3,
    plan: "Gold",
    description: "Advanced SEO strategy for national or competitive markets.",
    duration: "12 Month",
    pricePerMonth: "39999",
    originalPrice: "51133",
    savings: "21.79%",
    payToday: "479988",
    renewsAt: "239994",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in Silver",
      "40+ Targeted Keywords",
      "Competitor Analysis",
      "Conversion Tracking",
      "Backlink Building",
      "Weekly Ranking Reports",
      "Dedicated SEO Manager"
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
		rating: 4,
		review: "Within months, our website was ranking on the first page for key terms. Their SEO expertise is unmatched!",
		author: { name: "Sarah Johnson", title: "Marketing Head, EComPro" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "Their team helped us dominate local search. We’ve seen a 70% increase in organic leads!",
		author: { name: "Ravi Patel", title: "Owner, Smile Dental" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Professional, detailed, and results-driven. Highly recommend their SEO services to any business looking to grow organically.",
		author: { name: "Lena Wright", title: "Founder, TechSpring" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is included in your SEO services?",
			answer: "Our SEO services include keyword research, on-page optimization, technical SEO fixes, backlink building, content strategy, and monthly performance reporting.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How long before I see SEO results?",
			answer: "SEO is a long-term strategy. You may start seeing initial improvements in 1-2 months, with more significant results in 3-6 months.",
		},
		{
			id: "faq-3",
			question: "Will you optimize existing content?",
			answer: "Absolutely! We refine existing pages for better SEO performance while also creating new, search-friendly content as needed.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Can you guarantee top rankings on Google?",
			answer: "While no one can guarantee #1 rankings, we follow industry best practices and data-driven strategies that significantly improve your chances.",
		},
		{
			id: "faq-5",
			question: "Do you offer local SEO?",
			answer: "Yes! We help optimize your Google My Business listing, build local citations, and ensure your site ranks well in local search results.",
		},
		{
			id: "faq-6",
			question: "How do I track progress?",
			answer: "We provide detailed monthly reports covering keyword rankings, traffic, and other SEO KPIs to track your campaign’s performance.",
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
					{ label: "SEO Marketing" }
				]}
			/>
			<About
				title="Boost Your Rankings with Expert SEO Marketing"
				description="Drive more traffic, increase visibility, and convert visitors with strategic SEO marketing. We tailor your campaign for maximum search engine impact and long-term growth."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Keyword & Competitor Research" },
					{ icon: Icon5, text: "On-Page Optimization" },
					{ icon: Icon5, text: "Link Building & Backlink Strategy" },
					{ icon: Icon5, text: "Technical SEO Enhancements" },
					{ icon: Icon5, text: "Performance Reports & Tracking" },
				]}
			/>
			<Features title="Why Choose Our SEO Services" features={seoMarketingFeatures} />
			{/* <AutoSlider /> */}
			<Prices pricingPlans={seoPricingPlans} sectionTitle="Flexible SEO Packages for Every Business" />
			<Projects
				title="SEO Campaigns That Delivered Results"
				projectsData={seoProjects}
				viewAllLink="/projects"
			/>
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
