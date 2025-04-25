import FaqAccordion from "./FaqAccordion";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";

function Faq({ faqDataGroups }) {
	return (
		<section className="section sofax-section-padding7 bg-light" id="faq">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn>
								Frequently Asked Us
							</TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion faqDataGroups={faqDataGroups} />
				</div>
			</div>
		</section>
	);
}

export default Faq;
