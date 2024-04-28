import React, { useRef, useEffect } from "react";
import "./App.css";
import { Container } from "./components";
import { sectionsData } from "./constants";
import { SectionData } from "interfaces";
import { useCoolScroll } from "hooks";

const App: React.FC = () => {
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);

  useCoolScroll(container1Ref, container2Ref);

  return (
    <div className="App">
      <Container
        sections={sectionsData}
        containerRef={container1Ref}
      ></Container>
      <Container
        sections={sectionsData}
        containerRef={container2Ref}
      ></Container>
    </div>
  );
};

export default App;
