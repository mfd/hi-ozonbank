import React from "react";
import { Lightbox, useLightbox } from "./Lightbox";
import { IntroSection } from "./01-IntroSection";
import { SkillsSection } from "./02-SkillsSection";
import { CasesSection } from "./03-CasesSection";
import { desktopCasesDataSm, desktopCasesDataFull } from "../../constants/cases";

export default function Main() {
  const { openLightbox, lightboxProps } = useLightbox();

  return (
    <>
      <div className="flex flex-col gap-[40px] items-start pr-[98px] w-full">
        <IntroSection />
        <SkillsSection />
        <CasesSection
          cases={desktopCasesDataSm}
          fullCases={desktopCasesDataFull}
          onOpenLightbox={openLightbox}
        />
      </div>

      <Lightbox {...lightboxProps} />
    </>
  );
}