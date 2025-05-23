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
import AboutThumb from "@/public/images/services/digital/whatsapp/about.png";

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

const whatsappMarketingFeatures = [
	{
		id: 1,
		icon: icon1,
		title: "Direct Customer Engagement",
	},
	{
		id: 2,
		icon: icon2,
		title: "Automated Messaging & Chatbots",
	},
	{
		id: 3,
		icon: icon3,
		title: "High Open & Response Rates",
	},
	{
		id: 4,
		icon: icon4,
		title: "Rich Media Campaigns (Images, Videos, Docs)",
	},
	{
		id: 5,
		icon: icon5,
		title: "Secure & Verified Business Profiles",
	},
	{
		id: 6,
		icon: icon6,
		title: "Real-Time Campaign Analytics",
	},
];

/* Service Features */

const serviceData = {
	title: "Our WhatsApp Marketing Approach",
	shapeImage: Shape2,
	strategyTitle: "Engage, Convert, and Grow",
	strategyDescription:
		"We leverage the power of WhatsApp Business API and automation tools to help you build strong customer relationships, increase conversions, and provide instant support at scale.",
	listItems: [
		[
			{ icon: Icon, text: "Targeted Customer Broadcasts" },
			{ icon: Icon, text: "Rich Multimedia Campaign Creation" },
			{ icon: Icon, text: "Segmentation & Personalization" },
		],
		[
			{ icon: Icon, text: "Real-Time Response Handling" },
			{ icon: Icon, text: "Automated Follow-Ups & Chatbots" },
			{ icon: Icon, text: "Campaign Tracking & Reporting" },
		],
	],
};

/* Projects */

const whatsappProjects = [
	{
		id: 1,
		image: thumb1,
		title: "Product Promotion via WhatsApp",
		category: "WhatsApp Marketing",
		link: "/projects/project-1",
	},
	{
		id: 2,
		image: thumb2,
		title: "Lead Generation Campaign",
		category: "WhatsApp Marketing",
		link: "/projects/project-2",
	},
	{
		id: 3,
		image: thumb3,
		title: "Customer Retention Strategy",
		category: "WhatsApp Marketing",
		link: "/projects/project-3",
	},
];

/* Price Plan */

const whatsappPricingPlans = [
  {
    id: 1,
    plan: "WhatsBlast Starter",
    description: "Perfect for startups to begin their WhatsApp outreach journey.",
    duration: "6 Month",
    pricePerMonth: "4999",
    originalPrice: "6250",
    savings: "20.01%",
    payToday: "29994",
    renewsAt: "14997",
    gstNote: "*18% GST Extra",
    features: [
      "Up to 10,000 Messages/Month",
      "Message Scheduling",
      "Text + Image Message Support",
      "Custom Sender ID",
      "Delivery Report Tracking",
      "Basic Campaign Report",
      "Email Support"
    ],
    featureIcon,
    highlighted: false
  },
  {
    id: 2,
    plan: "BuzzPro Connect",
    description: "Engage wider audiences with enriched messaging campaigns.",
    duration: "12 Month",
    pricePerMonth: "14999",
    originalPrice: "20249",
    savings: "25.94%",
    payToday: "179988",
    renewsAt: "89994",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in WhatsBlast Starter",
      "Up to 30,000 Messages/Month",
      "Rich Media Support (PDF, Video, Links)",
      "Smart Contact Segmentation",
      "Click-through Tracking",
      "Dedicated Campaign Manager",
      "Chatbot Integration (Basic)"
    ],
    featureIcon,
    highlighted: true
  },
  {
    id: 3,
    plan: "MaxReach Pro",
    description: "Scale to the next level with automation and real-time analytics.",
    duration: "12 Month",
    pricePerMonth: "24999",
    originalPrice: "37498",
    savings: "33.34%",
    payToday: "299988",
    renewsAt: "149994",
    gstNote: "*18% GST Extra",
    features: [
      "Everything in BuzzPro Connect",
      "Unlimited Monthly Messages",
      "Advanced Analytics Dashboard",
      "AI Chatbot + Live Agent Routing",
      "CRM Integration",
      "Real-Time Broadcast Scheduling",
      "24/7 Support & Troubleshooting"
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
		review: "Our customer engagement skyrocketed after using WhatsApp campaigns. It’s now our most effective communication channel!",
		author: { name: "Rajesh Mehta", title: "Marketing Head, ShopEasy" },
	},
	{
		id: 2,
		image: image2,
		rating: 5,
		review: "We saw 3x conversion rates compared to email campaigns. The automation features made it a breeze to manage at scale.",
		author: { name: "Emily Carter", title: "Founder, FitLife Studio" },
	},
	{
		id: 3,
		image: image3,
		rating: 4,
		review: "Fast, personal, and effective. Great tool for staying in touch with leads and customers in real time.",
		author: { name: "Mohammed Irfan", title: "CEO, FreshKart" },
	},
];

/* FAQ */

const faqDataGroups = [
	[
		{
			id: "faq-1",
			question: "What is WhatsApp Marketing?",
			answer: "WhatsApp Marketing involves sending personalized messages, promotions, and updates to your customers via WhatsApp using business APIs and automation tools.",
			show: true,
		},
		{
			id: "faq-2",
			question: "Is WhatsApp Marketing legal?",
			answer: "Yes, we follow strict opt-in compliance using WhatsApp Business API and only message customers who have given their consent.",
		},
		{
			id: "faq-3",
			question: "Can I use media in my campaigns?",
			answer: "Absolutely! WhatsApp allows images, videos, PDFs, location sharing, and more to be sent in campaigns.",
		},
	],
	[
		{
			id: "faq-4",
			question: "How fast can I start?",
			answer: "We can get your account setup and first campaign ready within 2–3 business days after onboarding.",
		},
		{
			id: "faq-5",
			question: "Do you support automation and chatbots?",
			answer: "Yes, we offer advanced automation with chatbot flows, autoresponders, and scheduled messaging.",
		},
		{
			id: "faq-6",
			question: "How do I measure campaign performance?",
			answer: "We provide detailed campaign analytics including open rate, click-through, engagement stats, and ROI tracking.",
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
					{ label: "WhatsApp Marketing" }
				]}
			/>
			<About
				title="Engage Customers Directly with WhatsApp Marketing"
				description="Leverage the power of WhatsApp to connect with your customers instantly. Boost engagement, drive conversions, and provide real-time support using our tailored WhatsApp marketing services."
				image={AboutThumb}
				iconItems={[
					{ icon: Icon5, text: "Verified Business Profile Setup" },
					{ icon: Icon5, text: "Automation & Scheduling Tools" },
					{ icon: Icon5, text: "Media-Rich Promotional Campaigns" },
					{ icon: Icon5, text: "Personalized Customer Segmentation" },
					{ icon: Icon5, text: "Live Chat & Support Integration" },
				]}
			/>
			<Prices pricingPlans={whatsappPricingPlans} sectionTitle="WhatsApp Marketing Plans for All Business Sizes" />
			<Projects
				title="Successful WhatsApp Campaigns"
				projectsData={whatsappProjects}
				viewAllLink="/projects"
			/>
			<Features title="Why Choose Our WhatsApp Marketing Services" features={whatsappMarketingFeatures} />
			{/* <AutoSlider /> */}
			<SingleServiceDetails serviceData={serviceData} />
			<Testimonials data={testimonialsData} />
			<Faq faqDataGroups={faqDataGroups} />
		</>
	);
}

export default SingleService;
