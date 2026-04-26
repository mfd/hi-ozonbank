import React from "react";
import { CaseItem } from "./CaseItem";
import type { CaseData } from "../../constants/cases";

interface CasesSectionProps {
  cases: CaseData[];
  fullCases: CaseData[];
  onOpenLightbox: (images: string[], imageIndex: number) => void;
}

export function CasesSection({
  cases,
  fullCases,
  onOpenLightbox,
}: CasesSectionProps) {
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
          <p className="leading-[48px]">Релевантные кейсы:</p>
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        {cases.map((caseItem, caseIndex) => (
          <CaseItem
            key={caseIndex}
            {...caseItem}
            onImageClick={(imageIndex) =>
              onOpenLightbox(fullCases[caseIndex].images, imageIndex)
            }
          />
        ))}
      </div>
    </div>
  );
}
