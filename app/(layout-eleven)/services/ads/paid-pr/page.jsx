import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/services/advertisement-promotion/banner.jpg";
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
import AboutThumb from "@/public/images/services/ads/paid/about.png";

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

const paidPRFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Targeted Media Outreach",
	},
	{
		id: 2,
		icon: icon2,
		title: "Increased Brand Visibility",
	},
	{
		id: 3,
		icon: icon3,
		title: "Maximized ROI with Precision",
	},
	{
		id: 4,
		icon: icon4,
		title: "Comprehensive Analytics",
	},
	{
		id: 5,
		icon: icon5,
		title: "Industry-Leading Experts",
	},
	{
		id: 6,
		icon: icon6,
		title: "Effective Crisis Management",
	},
];

/* Service Details */

const paidPRServiceData = {
	title: "Our Paid PR Approach",
	shapeImage: Shape2,
	strategyTitle: "Paid PR Campaign Strategies",
	strategyDescription:
		"By combining targeted outreach with strategic media placements, we help businesses gain credible media coverage and build a strong public presence.",
	listItems: [
		[
			{ icon: Icon, text: "Comprehensive Media Strategy" },
			{ icon: Icon, text: "Targeted Press Release Distribution" },
			{ icon: Icon, text: "Press Coverage Tracking" },
		],
		[
			{ icon: Icon, text: "Paid Media Partnerships" },
			{ icon: Icon, text: "PR Crisis Management" },
			{ icon: Icon, text: "Tailored Messaging for Maximum Impact" },
		],
	],
};

/* Projects */

const paidPRProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Project 1 - National Media Campaign",
		category: "Paid PR",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Project 2 - Brand Awareness Campaign",
		category: "Paid PR",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Project 3 - Crisis Management PR",
		category: "Paid PR",
		link: "/projects/project-3",
	},
];

/* Pricing Plans */

const paidPRPricingPlans = [
  {
    id: 1,
    plan: "PR Starter",
    description: "Perfect for businesses making their first public appearance.",
    duration: "3 Month",
    pricePerMonth: "8999",
    originalPrice: "36000",
    savings: "25.01%",
    payToday: "26997",
    renewsAt: "17997",
    gstNote: "*18% GST Extra",
    features: [
      "1 Press Release/Month",
      "Distribution on 5+ Platforms",
      "SEO-Optimized Copywriting",
      "Brand Introduction Coverage",
      "Media Placement Report",
      "Basic Editorial Support",
      "Email Support"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "PR Pro",
    description: "Gain consistent media visibility and industry authority.",
    duration: "6 Month",
    pricePerMonth: "14999",
    originalPrice: "108000",
    savings: "30.56%",
    payToday: "89994",
    renewsAt: "44994",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in PR Starter",
      "2 Press Releases/Month",
      "Distribution to 10+ High Authority Platforms",
      "Interview Coverage (1 per quarter)",
      "Inclusion in Business News Sites",
      "Monthly Media Performance Report",
      "Priority Email & Chat Support"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "PR Elite",
    description: "For top-tier brands seeking wide, high-impact media exposure.",
    duration: "12 Month",
    pricePerMonth: "20999",
    originalPrice: "312000",
    savings: "35.26%",
    payToday: "161988",
    renewsAt: "80988",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in PR Pro",
      "4 Press Releases/Month",
      "National News Media Placement",
      "Video Interview Distribution",
      "Guaranteed Google News Inclusion",
      "Industry Feature Story",
      "Dedicated PR Manager"
    ],
    featureIcon,
    highlighted: false
  }
];

/* Testimonials */

const paidPRTestimonials = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Thanks to the Paid PR service, our brand visibility skyrocketed! The team successfully landed us key media coverage that strengthened our reputation.",
		author: { name: "Alice Williams", title: "Marketing Director" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "Highly effective PR strategy! They not only increased our visibility but also helped us navigate a potential crisis smoothly.",
		author: { name: "James Miller", title: "Founder & CEO" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "Excellent service and great results. We noticed a significant boost in media coverage and engagement, thanks to their targeted PR campaigns.",
		author: { name: "John Doe", title: "Business Owner" },
	},
];

/* FAQ */

const paidPRFaqData = [
	[
		{
			id: "faq-1",
			question: "What is the benefit of Paid PR?",
			answer: "Paid PR ensures that your brand is featured in trusted media outlets, increasing visibility, credibility, and ultimately sales.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How do you target the right media for my business?",
			answer: "We conduct in-depth research on your industry and target audience, identifying the best media outlets for your brand's message.",
		},
		{
			id: "faq-3",
			question: "Will you handle crisis PR as well?",
			answer: "Yes! Our paid PR strategies include crisis management, ensuring your brand handles any negative publicity with a structured approach.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How long does a Paid PR campaign last?",
			answer: "The duration of the campaign depends on the objectives, but typically, a campaign lasts 1-3 months to ensure measurable results.",
		},
		{
			id: "faq-5",
			question: "How can I track the success of a Paid PR campaign?",
			answer: "We provide detailed analytics and media coverage reports so you can track the impact of each placement and measure ROI.",
		},
		{
			id: "faq-6",
			question: "What is the cost of a Paid PR campaign?",
			answer: "The cost varies depending on the scale and objectives of the campaign. We offer customized quotes based on your specific needs.",
			show: true,
		},
	],
];

function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "Paid PR" }]}
			/>
			<About
				title="Boost Your Brand with Targeted Paid PR Campaigns"
				description="Our Paid PR service ensures your brand gets the media coverage it deserves. We design tailored PR campaigns that increase visibility, enhance brand trust, and drive traffic to your business."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Targeted Outreach for Maximum Exposure" },
					{ icon: Icon5, text: "Crisis Management Expertise" },
					{ icon: Icon5, text: "Comprehensive Analytics & Reporting" },
					{ icon: Icon5, text: "Long-Term Media Partnerships" },
					{ icon: Icon5, text: "ROI-Focused Strategies" },
				]}
			/>
			<Prices pricingPlans={paidPRPricingPlans} sectionTitle="Affordable Paid PR Campaigns" />
			<Projects
				title="Our Successful Paid PR Campaigns"
				projectsData={paidPRProjects}
				viewAllLink="/projects"
			/>
			<Features title="Key Features" features={paidPRFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={paidPRServiceData} />
			<Testimonials data={paidPRTestimonials} />
			<Faq faqDataGroups={paidPRFaqData} />
		</>
	);
}

export default SingleService;
