import Image from "next/image";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";

function SingleServiceDetails({ serviceData }) {
	if (!serviceData) return null;

	const {
		title,
		shapeImage,
		strategyTitle,
		strategyDescription,
		listItems,
	} = serviceData;

	return (
		<section className="sofax-section-padding7">
			<div className="container">
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>
						<TextSplitFadeIn>
							{title}
						</TextSplitFadeIn>
					</h2>
					{shapeImage && (
						<div className="sofax-service-inner-details-shape">
							<Image src={shapeImage} alt="Shape" />
						</div>
					)}
				</div>
				{/* <div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>{title}</h2>
					</div>
				</div> */}

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 theme-bg">
								<h3 className="light-color">{strategyTitle}</h3>
								<p>{strategyDescription}</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									{listItems?.map((column, i) => (
										<div key={i} className="sofax-list-icon-icon">
											<ul>
												{column.map((item, idx) => (
													<li key={idx}>
														<Image src={item.icon} alt="Icon" />
														{item.text}
													</li>
												))}
											</ul>
										</div>
									))}
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
