import Link from "next/link";
function HeaderButton({ setShowSideMenu }) {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Contact Us" href="/contact-us">
				<span className="button-wraper">Contact Us</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
