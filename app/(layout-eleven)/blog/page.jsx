import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import Banner from "@/public/images/about/banner.jpg";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Blog Page",
	description: "Sofax || Responsive Next.js Template",
};
function BlogPage() {
	return (
		<>
			<BreadCrumb title="Blog" bgImage={Banner} />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;
