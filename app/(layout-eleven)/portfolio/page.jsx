import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/portfolio/banner.jpg";
import ClientPortfolioList from './ClientPortfolioList';
import AutoSlider from "@/components/common/auto-slider";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

export const metadata = {
	title: "Best Web Designing Agency in Delhi Portfolio",
	description: "Best Web Designing Agency in Delhi",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" bgImage={Banner} />
			{/* <PortfolioList /> */}
			<ClientPortfolioList />
			<AutoSlider />
			<Faq />
		</>
	);
}

export default PortfolioPage;
