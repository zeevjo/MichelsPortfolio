import {
  MichelleAboutPicture,
  MichelleProfilePicture,
  MicheleClientsPicture,
  MichelleContactPicture,
} from "assets";
import { SectionData } from "interfaces";

const sectionsDataOne: SectionData[] = [
  { imgUrl: "", text: "Page container-1 1" },
  { imgUrl: MichelleAboutPicture, text: "Page container-1 2" },
  { imgUrl: "", text: "Page container-1 3" },
  { imgUrl: MichelleContactPicture, text: "Page container-1 4" },
];

const sectionsDataTwo: SectionData[] = [
  { imgUrl: "", text: "Page container-2 1" },
  { imgUrl: MicheleClientsPicture, text: "Page container-2 2" },
  { imgUrl: "", text: "Page container-2 3" },
  { imgUrl: MichelleProfilePicture, text: "Page container-2 4" },
];

export { sectionsDataOne, sectionsDataTwo };