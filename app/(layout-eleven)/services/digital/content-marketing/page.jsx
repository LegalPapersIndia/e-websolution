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
import AboutThumb from "@/public/images/services/digital/content/about.jpg";

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

const contentMarketingFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Custom, Audience-Focused Content",
	},
	{
		id: 2,
		icon: icon2,
		title: "SEO-Optimized Content for Growth",
	},
	{
		id: 3,
		icon: icon3,
		title: "Multichannel Content Strategy",
	},
	{
		id: 4,
		icon: icon4,
		title: "Engagement-Driven Content Creation",
	},
	{
		id: 5,
		icon: icon5,
		title: "Long-Form and Interactive Formats",
	},
	{
		id: 6,
		icon: icon6,
		title: "Comprehensive Performance Analytics",
	},
];

/* Service Features */

const serviceData = {
	title: "Our Content Marketing Approach",
	shapeImage: Shape2,
	strategyTitle: "Content Marketing Strategies",
	strategyDescription:
		"Our tailored content marketing strategies focus on creating valuable content that attracts, engages, and converts your target audience into loyal customers. We ensure that every piece of content is aligned with your business objectives and designed to provide measurable results.",
	listItems: [
		[
			{ icon: Icon, text: "Content Strategy Development" },
			{ icon: Icon, text: "SEO & Keyword Research" },
			{ icon: Icon, text: "Content Creation & Distribution" },
		],
		[
			{ icon: Icon, text: "Audience Segmentation & Targeting" },
			{ icon: Icon, text: "Social Media Integration" },
			{ icon: Icon, text: "Content Performance Monitoring" },
		],
	],
};

/* Projects */

const contentMarketingProjects = [
	{
		id: 1,
		image: thumb1,
		title: "E-commerce Blog Strategy",
		category: "Content Marketing",
		link: "/projects/content-marketing-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Educational Content Campaign",
		category: "Content Marketing",
		link: "/projects/content-marketing-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Lead Generation Content Funnel",
		category: "Content Marketing",
		link: "/projects/content-marketing-3",
	},
];

/* Price Plan */

const contentMarketingPricing = [
  {
    id: 1,
    plan: "ContentLite",
    description: "Perfect for startups and personal brands looking to build foundational content.",
    duration: "6 Month",
    pricePerMonth: "1299",
    originalPrice: "9999",
    savings: "22.02%",
    payToday: "7799",
    renewsAt: "4999",
    gstNote: "*18% GST Extra",
    features: [
      "8 SEO-Optimized Blog Posts",
      "2 Social Media Captions/Week",
      "Keyword Research",
      "Stock Images Included",
      "Basic Proofreading",
      "Content Calendar Access",
      "Performance Tracking Dashboard"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "BrandVoice Pro",
    description: "Ideal for growing businesses needing consistent, brand-driven content.",
    duration: "12 Month",
    pricePerMonth: "2499",
    originalPrice: "45999",
    savings: "27.18%",
    payToday: "33499",
    renewsAt: "14999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in ContentLite",
      "16 Blog Articles (1000+ Words)",
      "Weekly Social Media Content",
      "Content Strategy Plan",
      "Branded Visual Assets",
      "Monthly Content Reports",
      "Audience Engagement Boost"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "AuthorityMax",
    description: "Built for brands aiming to dominate search and thought leadership content.",
    duration: "12 Month",
    pricePerMonth: "3999",
    originalPrice: "74999",
    savings: "26.67%",
    payToday: "54999",
    renewsAt: "19999",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in BrandVoice Pro",
      "24 Long-Form Articles (1500+ Words)",
      "Thought Leadership & PR Content",
      "Infographics & E-books",
      "Advanced Content SEO Audits",
      "Dedicated Content Manager",
      "Quarterly Strategy Review"
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
		review: "Thanks to their content marketing services, our brand awareness skyrocketed! They really understand our audience and consistently deliver high-quality content.",
		author: { name: "Emily Johnson", title: "Marketing Director" },
	},
	{
		id: 2,
		image: image3,
		rating: 5,
		review: "The content strategy they developed helped us build a strong connection with our customers. We've seen significant improvements in engagement and conversions.",
		author: { name: "Michael Lee", title: "Content Strategist" },
	},
	{
		id: 3,
		image: image2,
		rating: 4,
		review: "The team helped us optimize our blog and social content for SEO. Our organic traffic has increased, and we're now ranking higher for key terms.",
		author: { name: "Sophia Miller", title: "SEO Manager" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is content marketing?",
			answer: "Content marketing is the creation and distribution of valuable, relevant content designed to attract, engage, and convert your target audience into customers. It includes blog posts, social media, videos, and more.",
			show: true,
		},
		{
			id: "faq-2",
			question: "How long does it take to see results from content marketing?",
			answer: "Content marketing is a long-term strategy. Depending on your industry and goals, it may take 3-6 months to start seeing significant results, but the long-term benefits are substantial.",
		},
		{
			id: "faq-3",
			question: "Can you help with content creation for social media?",
			answer: "Yes! We create content that works across multiple platforms, including blog posts, social media updates, infographics, and more to ensure consistent messaging and engagement.",
		},
	],
	[
		{
			id: "faq-4",
			question: "Do you offer SEO optimization with content creation?",
			answer: "Absolutely! Our content is always optimized for SEO, ensuring higher visibility in search results and driving organic traffic to your site.",
		},
		{
			id: "faq-5",
			question: "How do you measure the success of content marketing?",
			answer: "We measure success through key performance indicators (KPIs) such as traffic growth, engagement metrics, conversion rates, and SEO rankings to ensure your content is driving the right results.",
		},
		{
			id: "faq-6",
			question: "How much does content marketing cost?",
			answer: "The cost of content marketing depends on the scope and frequency of content production. We offer flexible pricing based on your specific needs and objectives.",
			show: true,
		},
	],
];

function SingleService() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "Content Marketing" }]}
			/>
			<About
				title="Effective Content Marketing to Grow Your Business"
				description="Transform your brand with strategic content marketing that connects with your audience, boosts engagement, and drives conversions. From blogs to social media, we provide a comprehensive content strategy tailored to your needs."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Targeted Content Creation for Every Channel" },
					{ icon: Icon5, text: "Data-Driven Strategies for Maximum Reach" },
					{ icon: Icon5, text: "SEO-Optimized Content to Drive Traffic" },
					{ icon: Icon5, text: "Tailored Campaigns to Align with Business Goals" },
					{ icon: Icon5, text: "Long-Term Growth and Consistent Engagement" },
				]}
			/>
			<Prices pricingPlans={contentMarketingPricing} sectionTitle="Affordable Content Marketing Plans for Every Business" />
			<Projects
				title="Our Successful Content Marketing Campaigns"
				projectsData={contentMarketingProjects}
				viewAllLink="/projects"
			/>
			<Features title="Content Marketing Features" features={contentMarketingFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
