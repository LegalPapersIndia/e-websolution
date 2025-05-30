// "use client";
// import { useState, useRef } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import CheckIcon from "@/public/images/icon/check.svg";
// import CloseIcon from "@/public/images/icon/close.svg";
// import Image from "next/image";
// import Link from "next/link";


// function PricingCard({ pricing: { plan, description, duration, pricePerYear, originalPrice, savings, payToday, renewsAt, gstNote, price, img, features, highlighted, featureIcon }, frequency }) {
// 	const [showAll, setShowAll] = useState(false);
// 	const parentVariants = {
// 		animate: {
// 			transition: {
// 				staggerChildren: 0.15,
// 			},
// 		},
// 	};

// 	const childVariants = {
// 		initial: { opacity: 0, y: 20 },
// 		animate: { opacity: 1, y: 0 },
// 		exit: { opacity: 0, y: 20 },
// 	};
// 	const packageIncludesRef = useRef(null);
// 	const packageIncludesIndex = features.findIndex(g => g.heading === "Package Includes");
// 	const handleToggleShowAll = () => {
// 		if (showAll && packageIncludesRef.current) {
// 			packageIncludesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
// 			setTimeout(() => setShowAll(false), 300);
// 		} else {
// 			setShowAll(true);
// 		}
// 	};

// 	return (
// 		<div className={`sofax-pricing-wrap ${highlighted ? "recommended" : ""}`}>
// 			{highlighted && <div className="recommended-tag">Recommended</div>}

// 			<div className="pricing-card-header">
// 				<h3 className="pricing-title">{plan}</h3>
// 				<p className="pricing-subtitle">{description}</p>

// 				<div className="pricing-info-box">
// 					<div className="pricing-top-row">
// 						<span className="pricing-amount">₹{pricePerYear}</span>
// 						<span className="pricing-unit">/yr</span>
// 					</div>
// 					<div className="pricing-bottom-row">
// 						<span className="pricing-discount">Save {savings}</span>
// 					</div>
// 				</div>
// 				<p className="pricing-gst-note">{gstNote}</p>
// 			</div>
// 			<div className="sofax-pricing-body">
// 				<AnimatePresence initial={false}>
// 					<motion.div
// 						key={showAll ? "expanded-groups" : "collapsed-groups"}
// 						variants={parentVariants}
// 						initial="initial"
// 						animate="animate"
// 						exit="exit"
// 					>
// 						{(showAll ? features : features.slice(0, packageIncludesIndex + 1)).map((group, groupIdx) => (
// 							<motion.div key={groupIdx} variants={childVariants} className="feature-group">
// 								{group.heading && <h5 className="feature-heading">{group.heading}</h5>}

// 								<motion.ul
// 									initial={{ height: 0, opacity: 0 }}
// 									animate={{ height: "auto", opacity: 1 }}
// 									exit={{ height: 0, opacity: 0 }}
// 									transition={{ duration: 0.3 }}
// 									style={{ overflow: "hidden" }}
// 								>
// 									{Array.isArray(group.items) &&
// 										group.items.map((feature, idx) => (
// 											<li key={idx} className="feature-item">
// 												<span className="feature-icon">
// 													<Image
// 														src={feature.included ? CheckIcon : CloseIcon}
// 														alt={feature.included ? "Included" : "Not included"}
// 														width={16}
// 														height={16}
// 													/>
// 												</span>
// 												<span className={feature.included ? "feature-included" : "feature-excluded"}>
// 													{feature.label}
// 												</span>
// 											</li>
// 										))}
// 								</motion.ul>
// 							</motion.div>
// 						))}
// 					</motion.div>
// 				</AnimatePresence>

// 				{/* Show button once at the end */}
// 				{features.length > packageIncludesIndex + 1 && (
// 					<button
// 						onClick={() => setShowAll(!showAll)}
// 						className="sofax-default-btn small mt-3"
// 					>
// 						{showAll ? "Show Less Features" : "Show All Features"}
// 						{showAll ? (
// 							<ChevronUp size={18} style={{ marginLeft: "8px" }} />
// 						) : (
// 							<ChevronDown size={18} style={{ marginLeft: "8px" }} />
// 						)}
// 					</button>
// 				)}
// 			</div>
// 			<div className="sofax-pricing-footer">
// 				<Link className={`sofax-default-btn d-block pill ${!highlighted && "outline-btn"}`} href="/contact-us">
// 					Purchase now
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

// export default PricingCard;

"use client";
import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CheckIcon from "@/public/images/icon/check.svg";
import CloseIcon from "@/public/images/icon/close.svg";
import Image from "next/image";
import Link from "next/link";

function PricingCard({
  pricing: {
    plan,
    description,
    duration,
    pricePerYear,
    originalPrice,
    savings,
    payToday,
    renewsAt,
    gstNote,
    price,
    img,
    features,
    highlighted,
    featureIcon,
  },
  frequency,
}) {
  const [showAll, setShowAll] = useState(false);
  const packageIncludesRef = useRef(null);

  const packageIncludesIndex = features.findIndex(
    (g) => g.heading === "Package Includes"
  );

  const handleToggleShowAll = () => {
    if (showAll) {
      if (packageIncludesRef.current) {
        packageIncludesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setTimeout(() => setShowAll(false), 400);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className={`sofax-pricing-wrap ${highlighted ? "recommended" : ""}`}>
      {highlighted && <div className="recommended-tag">Recommended</div>}

      <div className="pricing-card-header">
        <h3 className="pricing-title">{plan}</h3>
        <p className="pricing-subtitle">{description}</p>

        <div className="pricing-info-box">
          <div className="pricing-top-row">
            <span className="pricing-amount">₹{pricePerYear}</span>
            <span className="pricing-unit">/yr</span>
          </div>
          <div className="pricing-bottom-row">
            <span className="pricing-discount">Save {savings}</span>
          </div>
        </div>
        <p className="pricing-gst-note">{gstNote}</p>
      </div>

      <div className="sofax-pricing-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            {(showAll
              ? features
              : features.slice(0, packageIncludesIndex + 1)
            ).map((group, groupIdx) => {
              const isPackageIncludes = group.heading === "Package Includes";

              return (
                <div
                  key={groupIdx}
                  ref={isPackageIncludes ? packageIncludesRef : null}
                  className="feature-group"
                >
                  {group.heading && (
                    <h5 className="feature-heading">{group.heading}</h5>
                  )}
                  <ul>
                    {group.items.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-icon">
                          <Image
                            src={feature.included ? CheckIcon : CloseIcon}
                            alt={
                              feature.included ? "Included" : "Not included"
                            }
                            width={16}
                            height={16}
                          />
                        </span>
                        <span
                          className={
                            feature.included
                              ? "feature-included"
                              : "feature-excluded"
                          }
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {features.length > packageIncludesIndex + 1 && (
          <button
            onClick={handleToggleShowAll}
            className="sofax-default-btn small mt-3"
          >
            {showAll ? "Show Less Features" : "Show All Features"}
            {showAll ? (
              <ChevronUp size={18} style={{ marginLeft: "8px" }} />
            ) : (
              <ChevronDown size={18} style={{ marginLeft: "8px" }} />
            )}
          </button>
        )}
      </div>

      <div className="sofax-pricing-footer">
        <Link
          className={`sofax-default-btn d-block pill ${
            !highlighted && "outline-btn"
          }`}
          href="/contact-us"
        >
          Purchase now
        </Link>
      </div>
    </div>
  );
}

export default PricingCard;
