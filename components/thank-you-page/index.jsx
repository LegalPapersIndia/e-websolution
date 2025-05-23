import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
import NotifyForm from "./NotifyForm";

function CountDownRenderer({ days, hours, minutes, seconds }) {
	return (
		<section className="sofax-section-padding4">
			<div className="container">
				<NotifyForm />
			</div>
		</section>
	);
}

export default CountDownRenderer;
