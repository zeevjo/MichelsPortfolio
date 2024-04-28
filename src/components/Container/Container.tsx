import { Section } from "components";
import { ContainerProps } from "interfaces";

const Container: React.FC<ContainerProps> = ({ sections, containerRef }) => {
  console.log("sections", sections);
  
  return (
    <div className="container" ref={containerRef}>
      {sections.map((section, index) => (
        <Section
          key={index}
          backgroundColor={section.backgroundColor}
          text={section.text}
        />
      ))}
    </div>
  );
};

export default Container;
