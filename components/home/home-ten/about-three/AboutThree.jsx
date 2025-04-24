import Thumb from "@/public/images/v10/thumb4v10.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
	return (
		<section className="section sofax-section-padding bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn>Got Questions? We’ve Got Answers</TextSplitFadeIn>
								</h2>
							</div>
							<p>
								Explore the most common questions our clients ask about digital marketing, websites, and more.
							</p>
							<FadeInUp className="extra-mt sofax-faq-thumbv10">
								<Image src={Thumb} alt="thumb" />
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-accordion-wrap1 sofax-accordion-wrap3 ml-70">
							<div className="sofax-accordion-section-wrapper">
								<FadeInStaggerTwo
									className="accordion sofax-accordion-section-v10"
									id="sofax-accordion"
								>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												What makes your services unique?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												We provide customized, data-driven strategies focused on real, measurable results for your business.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header" id="headingOne">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												What industries do you specialize in?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											We have experience across various industries, including e-commerce, healthcare, real estate, and education, delivering results for businesses of all sizes.
													
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												Do you offer ongoing website support after launch?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Yes, we provide comprehensive post-launch support, including updates, security maintenance, and troubleshooting.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
											>
												Can I customize digital marketing plan to fit my budget?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseFour"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Yes, our plans are flexible and tailored to your goals, ensuring the best value within your budget.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFive"
											>
												How do you ensure ad campaigns reach right audience?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseFive"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												We use detailed targeting, audience segmentation, and analytics to reach the most relevant and high-converting users.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutThree;
