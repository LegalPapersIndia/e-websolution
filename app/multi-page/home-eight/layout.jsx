import Footer from "@/components/home/home-eight/footer";
import TopBar from "@/components/home/home-eight/topbar";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
	title: "Best Web Designing Agency in Delhi",
	description: "Best Web Designing Agency in Delhi",
};
function LayoutEight({ children }) {
	return (
		<>
			{/* <TopBar /> */}
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;
