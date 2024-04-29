import { SectionProps } from "interfaces";
import "./sction.css";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useCoolScroll } from "hooks";
import { storeContext } from "Context";
import AboutMe from "components/AboutMe";

const Section: React.FC<SectionProps> = ({
  backgroundImage,
  classNameExtension,
  text,
}) => {
  const { rightContainer, leftContainer } = useContext(storeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Observe when 1% or more is visible
  const { ref, inView } = useInView({ threshold: 0.1 }); 

  useCoolScroll(rightContainer, leftContainer);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const image = new Image();
    image.onload = handleLoad;

    if (backgroundImage === "") {
      setIsLoading(false);
    } else {
      image.src = backgroundImage; 
    }

    return () => {
      image.onload = null;
    };
  }, [backgroundImage]);

  const sectionStyle = {
    backgroundImage: isLoading ? "none" : `url(${backgroundImage})`,
  };

  const sectionClass = `section-container ${isLoading ? "section-loading" : ""} ${
    isVisible || isLoading ? "section-in-view" : ""
  } ${classNameExtension}`;

  return (
    <section ref={ref} className={sectionClass} style={sectionStyle}>
      {isLoading ? (
        <div className="section-img-placeholder" />
      ) : (
        backgroundImage === "" && <AboutMe />
      )}
    </section>
  );
};

export default Section;
