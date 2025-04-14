import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/common/header";
import TopBar from "@/components/common/topbar";
function LayoutEleven({ children }) {
	return (
		<>
			<TopBar />
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;
