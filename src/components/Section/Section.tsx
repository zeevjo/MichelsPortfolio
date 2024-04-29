import { SectionProps } from "interfaces";
import "./sction.css";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useCoolScroll } from "hooks";
import { storeContext } from "Context";

const Section: React.FC<SectionProps> = ({ backgroundImage, text }) => {
  const [isLoading, setIsLoading] = useState(true); // Add state for loading
  const [isVisible, setIsVisible] = useState(false);
  const { rightContainer, leftContainer } = useContext(storeContext);

  const { ref, inView } = useInView({ threshold: 0.1 }); // Observe when 50% or more is visible

  useCoolScroll(rightContainer, leftContainer);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    const image = new Image();
    image.onload = handleLoad;

    // Check for empty backgroundImage and set loading to false immediately
    if (backgroundImage === "") {
      setIsLoading(false);
    } else {
      image.src = backgroundImage; // Update image source only if there's an image
    }

    return () => {
      image.onload = null;
    };
  }, [backgroundImage]);

  const sectionStyle = {
    backgroundImage: isLoading ? "none" : `url(${backgroundImage})`,
  };

  // Define class names based on loading state
  const sectionClass = `section ${isLoading ? "section-loading" : ""}`;

  const handelAboutMeClicked = (delta: number): void => {
    const container1 = rightContainer.current;
    const container2 = leftContainer.current;

    if (container1 && container2) {
      // Apply scrolling to both containers
      container1.scrollBy({ top: delta, behavior: "smooth" });
      container2.scrollBy({ top: -delta, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className={`${sectionClass} ${
        isVisible || isLoading ? "section-in-view" : ""
      }`}
      style={sectionStyle}
    >
      {/* Render placeholder or image based on loading state */}
      {isLoading ? (
        <div className="placeholder" />
      ) : (
        backgroundImage === "" && (
          <div id="title-c">
            <div id="title">HI THERE!</div>

            <div id="sub-title-1">
              I'M <span className="highlight">MICHELE</span>
            </div>

            <div id="sub-title-2">Marketing consultant & media expert</div>

            <div id="sub-title-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis vitae eius, distinctio maxime facilis nihil non tenetur
              suscipit dolores sint deleniti quis, ipsa ipsum ab quos labore
              neque corporis magni.
            </div>

            <button
              onClick={() => handelAboutMeClicked(100)}
              id="btn"
              type="button"
            >
              MORE ABOUT ME
            </button>
          </div>
        )
      )}
    </section>
  );
};

export default Section;
