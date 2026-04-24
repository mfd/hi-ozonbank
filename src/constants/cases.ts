// Import image mapping
import { imageMap } from "./casesImg";

// Import JSON data
import casesDataRaw from "./cases.json";

// Case item type
export interface CaseData {
  title: string;
  figmaUrl?: string;
  figmaButtonText?: string;
  githubUrl?: string;
  githubButtonText?: string;
  prototypeUrl?: string;
  prototypeButtonText?: string;
  exampleUrl?: string;
  exampleButtonText?: string;
  description?: string;
  goal?: string;
  solution?: string;
  images: string[];
  showBorder?: boolean;
  showGallery?: boolean;
}

// Export desktop cases with resolved image paths
export const desktopCasesData: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.map((imageKey) => imageMap[imageKey]),
}));

// Export mobile cases with resolved image paths (only first 2 images)
export const mobileCasesData: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.slice(0, 2).map((imageKey) => imageMap[imageKey]),
}));