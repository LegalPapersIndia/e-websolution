import AboutOne from "@/components/home/home-eight/about-one";
import AboutTwo from "@/components/home/home-eight/about-two/AboutTwo";
import Counter from "@/components/home/home-eight/counter";
import Hero from "@/components/home/home-eight/hero";
import PricePlan from "@/components/home/home-eight/price-plan";
import HeroSlider from "@/components/home/home-eight/slider";
import AutoSlider from "@/components/common/auto-slider";
import Projects from "@/components/home/home-eight/projects";
import Steps from "@/components/home/home-three/services";
import LogoSlider from "@/components/home/home-nine/logo-slider";
import Faq from "@/components/home/home-ten/about-three/AboutThree";
import Features from "@/components/home/home-two/services";
import Integrations from "@/components/home/home-seven/integrations";
import Services from "@/components/home/home-eight/services";
import ServiceOne from "@/components/home/home-eight/services-one";
import LatestUpdates from "@/components/home/home-eight/LatestUpdates";
import SideBanner from "@/components/home/home-eight/sidebanner";
import Blogs from "@/components/home/home-nine/latest-updates";
import Testimonials from "@/components/home/home-one/testimonial";

function HomeEight() {
	return (
		<>
			{/* <Hero /> */}
			<SideBanner />
			<HeroSlider />
			{/* <Features /> */}
			{/* <AboutOne /> */}
			<ServiceOne />
			<LogoSlider />
			<Features />
			<Counter />
			<Services />
			<Steps />
			<Integrations />
			{/* <AboutTwo /> */}
			{/* <PricePlan /> */}
			{/* <Projects /> */}
			<Faq />
			{/* <AutoSlider /> */}
			<Testimonials />
			<Blogs />
		</>
	);
}

export default HomeEight;
