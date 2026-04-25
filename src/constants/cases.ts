// Import image mappings
import { imageMapSm, imageMapFull } from "./casesImg";

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

// Export desktop cases with resolved small image paths for preview
export const desktopCasesDataSm: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.map((imageKey) => imageMapSm[imageKey]),
}));

// Export desktop cases with resolved full image paths for lightbox
export const desktopCasesDataFull: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.map((imageKey) => imageMapFull[imageKey]),
}));

// Export mobile cases with resolved small image paths (only first 2 images)
export const mobileCasesDataSm: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.slice(0, 2).map((imageKey) => imageMapSm[imageKey]),
}));

// Export mobile cases with resolved full image paths (only first 2 images)
export const mobileCasesDataFull: CaseData[] = casesDataRaw.map((caseItem) => ({
  ...caseItem,
  images: caseItem.images.slice(0, 2).map((imageKey) => imageMapFull[imageKey]),
}));