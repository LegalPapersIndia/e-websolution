import Icon2 from "@/public/images/service/icon2.png";
import Icon3 from "@/public/images/service/icon3.png";
import Icon4 from "@/public/images/service/icon4.png";
import Icon5 from "@/public/images/service/icon5.png";
import Thumb from "@/public/images/service/service-thumb.png";
import Check from "@/public/images/service/check.svg";
import Shape1 from "@/public/images/service/shape1.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
function About() {
	return (
		<section className="sofax-section-padding3 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-service-thumb">
							<Image src={Thumb} alt="Thumbs" />
						</FadeInRight>
						<div className="sofax-inner-service-shape">
							<Image src={Shape1} alt="content-shape" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50 tac">
							<h2>Boost Your Business with Expert Website Design Solutions.</h2>
							<p>
								Experience unparalleled business progress with Sofax. Our expert team in leveraging
								cutting.Digital strategies to propel your brand forward.
							</p>
							<div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon5} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5>Multiply global marketing business to strategy</h5>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon5} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5>Multiply global marketing business to strategy</h5>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon5} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5>Multiply global marketing business to strategy</h5>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon5} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5>Multiply global marketing business to strategy</h5>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon5} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h5>Multiply global marketing business to strategy</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
