import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/common/header";
import TopBar from "@/components/common/topbar";
import SideBanner from "@/components/home/home-eight/sidebanner";
import SocialSidebar from "@/components/social-sidebar/SocialSidebar";
function LayoutEleven({ children }) {
	return (
		<>
			<TopBar />
			<SideBanner />
			<SocialSidebar />
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;
