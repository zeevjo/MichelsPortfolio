import { SectionProps } from "interfaces";

const Section: React.FC<SectionProps> = ({ backgroundColor, text }) => {
  return <section style={{ backgroundColor }}>{text}</section>;
};

export default Section;
