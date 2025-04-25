import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

function Testimonials({ data, title = "See what our Customers say About Us" }) {
	return (
		<section className="sofax-section-padding8 bg-light" id="testimonial">
			<div className="extra-mt container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>{title}</h2>
					</div>
				</div>
				<div className="row">
					{data.map((testimonial, index) => (
						<FadeInStagger key={testimonial.id} index={index} className="col-xl-4 col-md-6">
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
