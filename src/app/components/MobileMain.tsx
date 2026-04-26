import React from "react";
import { Lightbox, useLightbox } from "./Lightbox";
import { CaseItem } from "./CaseItem";
import { IntroSection } from "./01-IntroSection";
import { SkillsSection } from "./02-SkillsSection";
import { mobileCasesDataSm, mobileCasesDataFull } from "../../constants/cases";

export default function MobileMain() {
  const { openLightbox, lightboxProps } = useLightbox();

  return (
    <>
      <div className="flex flex-col gap-[48px] items-start w-full pb-[72px]">
        <IntroSection isMobile />
        <SkillsSection isMobile />

        {/* Cases Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[28px] tracking-[0.21px] w-full">
              <p className="leading-[42px]">
                Релевантные кейсы:
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            {mobileCasesDataSm.map((caseItem, caseIndex) => (
              <CaseItem
                key={caseIndex}
                {...caseItem}
                isMobile
                onImageClick={(imageIndex) => openLightbox(mobileCasesDataFull[caseIndex].images, imageIndex)}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox {...lightboxProps} />
    </>
  );
}