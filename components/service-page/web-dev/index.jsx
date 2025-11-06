import Icon from "@/public/images/service/icon5.png";
import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
function SingleServiceDetails() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>How our agency provides Web Design services</h2>
					<div className="sofax-service-inner-details-shape">
						<Image src={Shape2} alt="Shape2" />
					</div>
				</div>

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 theme-bg">
								<h3 className="light-color">Web Design strategies</h3>
								<p>
									The broader context of a project aligning to design decisions with business goals &
									creating roadmap for achieving optimal user experiences.
								</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Measurement & analytics
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												User-centered approach
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Personal development
											</li>
										</ul>
									</div>
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Wireframing & prototyping
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Stakeholder alignment
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Iterative improvement
											</li>
										</ul>
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

export default SingleServiceDetails;
