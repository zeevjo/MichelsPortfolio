import React, { useRef, useEffect, useContext } from "react";
import "./App.css";
import { Container } from "./components";
import { sectionsDataOne, sectionsDataTwo } from "./constants";
import { SectionData } from "interfaces";
import { useCoolScroll } from "hooks";
import { MichelleProfilePicture } from "assets";
import { storeContext } from "Context";

const App: React.FC = () => {
  const {setRightContainer, setLeftContainer} = useContext(storeContext);
  const rightContainer = useRef<HTMLDivElement>(null);
  const leftContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRightContainer(rightContainer);
    setLeftContainer(leftContainer);
  }, [])

  useCoolScroll(rightContainer, leftContainer);
  return (
    <div className="App">
      <Container
        sections={sectionsDataOne}
        containerRef={rightContainer}
      ></Container>
      <Container
        sections={sectionsDataTwo}
        containerRef={leftContainer}
      ></Container>
    </div>
  );
};

export default App;



