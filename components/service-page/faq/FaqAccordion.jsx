import Image from "next/image";
import Icon from "@/public/images/v2/icon9.png";

function FaqAccordion({ faqDataGroups }) {
	return (
		<div className="sofax-accordion-section-wrapper">
			{faqDataGroups.map((group, groupIndex) => (
				<div
					key={`group-${groupIndex}`}
					className={`accordion sofax-accordion-section-v2 ${groupIndex > 0 ? "mt-24" : ""}`}
					id={`sofax-accordion-${groupIndex}`}
				>
					{group.map((faqItem, index) => (
						<div key={faqItem.id} className="accordion-item sofax-accordion-item">
							<h3 className="accordion-header sofax-accordion-header">
								<button
									className={`accordion-button ${faqItem.show ? "" : "collapsed"}`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#${faqItem.id}`}
								>
									{faqItem.question}
								</button>
								<div className="accordion-icon">
									<Image src={Icon} alt="Icon" />
								</div>
							</h3>
							<div
								id={faqItem.id}
								className={`accordion-collapse collapse ${faqItem.show ? "show" : ""}`}
								data-bs-parent={`#sofax-accordion-${groupIndex}`}
							>
								<div className="accordion-body sofax-accordion-body">
									{faqItem.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default FaqAccordion;
