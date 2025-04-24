import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import TextSplitFadeIn from "../../animation/TextSplitFadeIn";

function Features({ title = "Why Choose Us", features = [] }) {
  return (
    <section className="sofax-section-padding bg-light" id="service">
      <div className="container">
        <div className="mt-5 sofax-section-title center">
          <div className="tg-heading-subheading animation-style3">
            <h2>
              <TextSplitFadeIn>{title}</TextSplitFadeIn>
            </h2>
          </div>
        </div>
        <div className="sofax-features-wrapv8">
          {features.map((service, index) => (
            <FadeInStagger key={service.id || index} index={index} className="sofax-features-boxv8">
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
