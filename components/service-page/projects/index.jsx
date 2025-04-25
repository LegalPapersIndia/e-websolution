import Link from "next/link";
import FadeInStagger from "../../animation/FadeInStagger";
import TextSplitFadeIn from "@/components/animation/TextSplitFadeIn";
import ProjectCard from "./ProjectCard";

// Default props, can be overwritten by any page using this component
function Projects({ title = "Check out our Latest Projects", projectsData = [], viewAllLink = "/service" }) {
  return (
    <div className="section sofax-section-padding8" id="project">
      <div className="container">
        <div className="sofax-section-title">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="tg-heading-subheading animation-style3">
                <h2>
                  <TextSplitFadeIn>
                    {title}
                  </TextSplitFadeIn>
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
              <div className="sofax-title-btn wow fadeInUpX">
                <Link className="sofax-default-btn pill" data-text="View All Projects" href={viewAllLink}>
                  <span className="button-wraper">View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {projectsData.map((project, index) => (
            <FadeInStagger key={project.id} index={index} className="col-lg-4 col-md-6">
              <ProjectCard project={project} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
