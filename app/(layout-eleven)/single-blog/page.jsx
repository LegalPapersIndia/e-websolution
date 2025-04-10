import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Banner from "@/public/images/about/banner.jpg";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Single Blog Page",
	description: "Sofax || Responsive Next.js Template",
};
function SingleBlogPage() {
	return (
		<>
			<BreadCrumb title="Blog Details" bgImage={Banner} />
			<SingleBlog />
			<AutoSlider />
		</>
	);
}

export default SingleBlogPage;
