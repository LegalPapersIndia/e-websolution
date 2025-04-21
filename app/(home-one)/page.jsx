import AboutOne from "@/components/home/home-eight/about-one";
import AboutTwo from "@/components/home/home-eight/about-two/AboutTwo";
import Counter from "@/components/home/home-eight/counter";
import Hero from "@/components/home/home-eight/hero";
import PricePlan from "@/components/home/home-eight/price-plan";
import HeroSlider from "@/components/home/home-eight/slider";
import AutoSlider from "@/components/common/auto-slider";
import Projects from "@/components/home/home-eight/projects";
import Steps from "@/components/home/home-three/services";
import Faq from "@/components/home/home-ten/about-three/AboutThree";
import Features from "@/components/home/home-two/services";
import Services from "@/components/home/home-eight/services";
import ServiceOne from "@/components/home/home-eight/services-one";
import Testimonials from "@/components/home/home-one/testimonial";

function HomeEight() {
	return (
		<>
			{/* <Hero /> */}
			<HeroSlider />
			{/* <Features /> */}
			{/* <AboutOne /> */}
			<ServiceOne />
			<Features />
			<Counter />
			<Services />
			<Steps />
			{/* <AboutTwo /> */}
			{/* <PricePlan /> */}
			{/* <Projects /> */}
			<Faq />
			<AutoSlider />
			<Testimonials />
		</>
	);
}

export default HomeEight;
