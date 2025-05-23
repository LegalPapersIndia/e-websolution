import { useForm } from "react-hook-form";
import Image from "next/image";
import ThankYouImage from "@/public/images/contact/thanks.png";
import { toast, ToastContainer } from "react-toastify";
import FadeInUp from "../animation/FadeInUp";
import FadeInRight from "../animation/FadeInRight";
import Field from "../common/Field";
function NotifyForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submited Form Data = ", formData);
		reset();
		toast("Thanks, for subscription!");
	};

	return (
		<FadeInUp>
			{/* <FadeInRight className="sofax-thank-you-thumb center-image">
              <Image src={ThankYouImage} alt="Thumbs" />
            </FadeInRight> */}
			<ToastContainer position="bottom-right" />
			<div className="sofax-countdown-content sofax-section-title center max-width-large">
				<h2>Thank you for Messaging Us!</h2>
				<div className="mt-30">
					<h4>Our Team will reach you shortly...</h4>
				</div>
			</div>
			<div className="sofax-countdown-bottom-text">
				<p>Feel Free to contact @ <a href="tel:+919354305099">9354305099</a></p>
			</div>
			<div className="extra-mt sofax-countdown-bottom-text">
				<p>Go Back to HomePage <a href="/">Click Here</a></p>
			</div>
		</FadeInUp>
	);
}

export default NotifyForm;
