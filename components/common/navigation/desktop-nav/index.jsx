import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			{/* <NavItem dropdown title="Home">
				<Dropdown>
					<DropdownItem dropdown title="MultiPage">
						<Dropdown noShape>
							<DropdownItem url="multi-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="multi-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="multi-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="multi-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="multi-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="multi-page/home-six">CRM</DropdownItem>
							<DropdownItem url="multi-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="multi-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="multi-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="multi-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="OnePage">
						<Dropdown noShape>
							<DropdownItem url="one-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="one-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="one-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="one-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="one-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="one-page/home-six">CRM</DropdownItem>
							<DropdownItem url="one-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="one-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="one-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="one-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown>
			</NavItem> */}

{/* Needed Navbar contents: Home, About Services, Portfolio, Packages, contact us */}

			{/* <NavItem url="/">Home</NavItem>	 */}

			{/* <NavItem url="about-us"></NavItem> */}
			<NavItem dropdown title="Website Design">
				<Dropdown>
					<DropdownItem url="services/website/web-design">Web Design</DropdownItem>
					<DropdownItem url="services/website/small-business-website">Small Business Website</DropdownItem>
					<DropdownItem url="services/website/large-business-website">Large Business Website</DropdownItem>
					<DropdownItem url="services/website/dynamic-website">Dynamic Website</DropdownItem>
					<DropdownItem url="services/website/customize-website">Customised Website</DropdownItem>
					<DropdownItem url="services/website/ecommerce-website">Ecommerce Website</DropdownItem>
					<DropdownItem url="services/website/industry-specific-website">Industry Based Website</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem dropdown title="Digital Marketing">
				<Dropdown>
					<DropdownItem url="services/digital/seo-marketing">SEO Marketing</DropdownItem>
					<DropdownItem url="services/digital/smo-marketing">SMO Marketing</DropdownItem>
					<DropdownItem url="services/digital/google-marketing">Google Marketing Platform</DropdownItem>
					<DropdownItem url="services/digital/whatsapp-marketing">Whatsapp Marketing</DropdownItem>
					<DropdownItem url="services/digital/email-marketing">Email Marketing</DropdownItem>
					<DropdownItem url="services/digital/content-marketing">Content Marketing</DropdownItem>
				</Dropdown>
			</NavItem>
			<NavItem dropdown title="Promotion & Advertisement">
				<Dropdown>
					<DropdownItem url="services/ads/google-ads">Google Ads</DropdownItem>
					<DropdownItem url="services/ads/meta-ads">Meta Ads</DropdownItem>
					<DropdownItem url="services/ads/tv-ads">TV Ads</DropdownItem>
					<DropdownItem url="services/ads/brand-promotion">Brand Promotion</DropdownItem>
					<DropdownItem url="services/ads/social-media-promotion">Social Media Promotion</DropdownItem>
					<DropdownItem url="services/ads/paid-pr">Paid PR</DropdownItem>
				</Dropdown>
			</NavItem>
			{/* <NavItem dropdown title="Website">
				<Dropdown>
					<DropdownItem url="about-us">About Company</DropdownItem>
					<DropdownItem url="portfolio">Our Portfolio</DropdownItem> */}
					{/* <DropdownItem dropdown title="Blog">
						<Dropdown noShape>
							<DropdownItem url="blog">Our Blog</DropdownItem>
							<DropdownItem url="single-blog">Blog Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Service">
						<Dropdown noShape>
							<DropdownItem url="service">Service</DropdownItem>
							<DropdownItem url="single-service">Service Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Team"}>
						<Dropdown noShape>
							<DropdownItem url="team">Team</DropdownItem>
							<DropdownItem url="single-team">Team Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Career"}>
						<Dropdown noShape>
							<DropdownItem url="career">Career</DropdownItem>
							<DropdownItem url="single-career">Career Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title={"Portfolio"}>
						<Dropdown noShape>
							<DropdownItem url="portfolio">Our Portfolio</DropdownItem>
							<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Utility">
						<Dropdown noShape>
							<DropdownItem url="faq">FAQ</DropdownItem>
							<DropdownItem url="error-page">Error Page</DropdownItem>
							<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
							<DropdownItem url="terms-and-condition">Terms & Condition</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="Account">
						<Dropdown noShape>
							<DropdownItem url="sign-up">Sign Up</DropdownItem>
							<DropdownItem url="sign-in">Sign In</DropdownItem>
							<DropdownItem url="reset-password">Reset Password</DropdownItem>
						</Dropdown>
					</DropdownItem> */}
				{/* </Dropdown>
			</NavItem> */}
			{/* <NavItem dropdown url="service" title="Services">
				<Dropdown>
					<DropdownItem url="service">All Services</DropdownItem>
					<DropdownItem url="services/web-development">Web Design & Development</DropdownItem>
					<DropdownItem url="services/digital-marketing">Social Media Management</DropdownItem>
					<DropdownItem url="services/google-marketing-platform">Google Marketing Platform</DropdownItem>
					<DropdownItem url="services/graphic-designing">Logo & Graphic Designing</DropdownItem>
					<DropdownItem url="services/app-development">App Development</DropdownItem>
					<DropdownItem url="services/ecommerce-development">Ecommerce Development</DropdownItem>
				</Dropdown>
			</NavItem> */}
			{/* <NavItem url="pricing">Packages</NavItem> */}
			{/* <NavItem url="pricing">Packages</NavItem> */}
			<NavItem url="contact-us">Contact</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
