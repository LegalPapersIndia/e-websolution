import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/service/banner1.jpg"
import Faq from "@/components/home/home-ten/about-three/AboutThree";
import Services from "@/components/home/home-eight/services";
import Testimonials from "@/components/home/home-one/testimonial";
import Steps from "@/components/home/home-three/services";
export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function ServicePage() {
	return (
		<>
			<BreadCrumb
				bgImage={Banner}
				trail={[
					{ label: "Home", href: "/" },
					{ label: "Services"}
				]}
			/>
			<Services />
			{/* <AutoSlider /> */}
			<Steps />
			<Testimonials />
			<Faq />
		</>
	);
}

export default ServicePage;
