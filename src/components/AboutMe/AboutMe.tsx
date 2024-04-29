import { storeContext } from "Context";
import { useContext } from "react";
import "./aboutMe.css";

const AboutMe = () => {
  const { rightContainer, leftContainer } = useContext(storeContext);
  const handelAboutMeClicked1 = (delta: number): void => {
    const container1 = rightContainer.current;
    const container2 = leftContainer.current;

    if (container1 && container2) {
      // Apply scrolling to both containers
      container1.scrollBy({ top: delta, behavior: "smooth" });
      container2.scrollBy({ top: -delta, behavior: "smooth" });
    }
  };

  return (
    <div id="about-me-container">
      {/* <div>{text}</div> */}
      <div id="about-me-title">HI THERE!</div>

      <div id="about-me-sub-title-1">
        I'M <span className="highlight">MICHELE</span>
      </div>

      <div id="about-me-sub-title-2">Marketing consultant & media expert</div>

      <div id="about-me-sub-title-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        vitae eius, distinctio maxime facilis nihil non tenetur suscipit dolores
        sint deleniti quis, ipsa ipsum ab quos labore neque corporis magni.
      </div>

      <button
        onClick={() => handelAboutMeClicked1(100)}
        id="about-me-btn"
        type="button"
      >
        MORE ABOUT ME
      </button>
    </div>
  );
};

export default AboutMe;
