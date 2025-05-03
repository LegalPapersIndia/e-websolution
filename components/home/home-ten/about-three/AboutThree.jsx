import Thumb from "@/public/images/v10/thumb4v10.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
	return (
		<section className="section sofax-section-padding7 bg-light">
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
												How do we communicate during the project?
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
											We provide clear communication through email, Zoom/Google Meet, project management tools, and regular updates to ensure transparency and collaboration.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseSix"
											>
												Can you help drive traffic to my new website?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseSix"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											Yes. In addition to design, we offer digital marketing services including SEO, Google Ads, social media marketing, and more to help you attract the right audience.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseSeven"
											>
												Is there a contract or commitment required?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseSeven"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											We provide a clear service agreement outlining the project scope, timeline, deliverables, and pricing—no hidden fees or long-term obligations unless requested.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseEight"
											>
												How does your agency stay ahead with the latest web design trends and technologies?
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseEight"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
											We prioritize continuous research and development to stay aligned with evolving industry standards. Our team regularly explores emerging tools, frameworks, and UX/UI trends to ensure every website we deliver is not only modern and scalable but also future-ready and performance-driven. This dedication helps our clients stay competitive in a rapidly changing digital landscape.
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
