import Flag from "@/public/images/v7/growth.png";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function Integrations() {
	return (
		<section className="section integration-vertsion7 theme-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 d-flex align-items-center">
						<div className="sofax-default-content tac light-color">
							<div className="tg-heading-subheading animation-style3">
								<h3>Ready to Start a Business but Not Sure Where to Begin?</h3>
							</div>
							<p>
								At E-websolution, we take care of we craft stunning websites, amplify brands, and power growth through brand promotion with end-to-end solutions.
							</p>
							<FadeInUp>
								<Link
									className="sofax-integration-btn pill"
									data-text="Get Started"
									href="/contact-us"
								>
									<span className="button-wraper">Get Started </span>
								</Link>
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInRight className="integration-social-icon integrationv7">
							<Image src={Flag} alt="Flag" />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integrations;
