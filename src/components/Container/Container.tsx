import { Section } from "components";
import { ContainerProps } from "interfaces";
import './container.css'

const Container: React.FC<ContainerProps> = ({ sections, containerRef }) => {

  return (
    <div className="container-container" ref={containerRef}>
      {sections.map((section, index) => (
        <Section
          key={index}
          backgroundImage={section.imgUrl}  // Update prop name
          text={section.text}
          classNameExtension={section.classNameExtension}
        />
      ))}
    </div>
  );
};

export default Container;

