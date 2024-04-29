import {
  MichelleAboutPicture,
  MichelleProfilePicture,
  MicheleClientsPicture,
  MichelleContactPicture,
} from "assets";
import { SectionData } from "interfaces";

const sectionsDataOne: SectionData[] = [
  { imgUrl: "", text: "Page container-1 1", classNameExtension: "container-1-section-1"},
  { imgUrl: MichelleAboutPicture, text: "Page container-1 2", classNameExtension: "container-1-section-2" },
  { imgUrl: "", text: "Page container-1 3", classNameExtension: "container-1-section-3" },
  { imgUrl: MichelleContactPicture, text: "Page container-1 4", classNameExtension: "container-1-section-4" },
];

const sectionsDataTwo: SectionData[] = [
  { imgUrl: "", text: "Page container-2 1", classNameExtension: "container-2-section-1" },
  { imgUrl: MicheleClientsPicture, text: "Page container-2 2", classNameExtension: "container-2-section-2" },
  { imgUrl: "", text: "Page container-2 3" , classNameExtension: "container-2-section-3"},
  { imgUrl: MichelleProfilePicture, text: "Page container-2 4", classNameExtension: "container-2-section-4" },
];

export { sectionsDataOne, sectionsDataTwo };