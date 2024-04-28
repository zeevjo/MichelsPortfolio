import { SectionData } from "./SectionData";

export interface ContainerProps {
  sections: SectionData[];
  containerRef: React.Ref<HTMLDivElement>;
}