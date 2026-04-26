import React from "react";
import { skillsContent } from "../../constants/introSkills";

interface SkillsSectionProps {
  isMobile?: boolean;
}

export function SkillsSection({ isMobile = false }: SkillsSectionProps) {
  return (
    <div className="flex flex-col gap-[16px] items-start justify-center overflow-clip w-full">
      <div className="flex flex-col items-start w-full">
        <div
          className={`flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] tracking-[0.21px] w-full ${
            isMobile ? "text-[28px]" : "text-[32px]"
          }`}
        >
          <p className={isMobile ? "leading-[42px]" : "leading-[48px]"}>
            {skillsContent.title}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col gap-[12px] items-center ${
          isMobile ? "w-full" : "w-[849px]"
        }`}
      >
        <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#1f1f1f] text-[20px] w-[min-content]">
          <ul className="space-y-[12px]">
            {skillsContent.items.map((item) => (
              <li key={item} className="list-disc ms-[30px]">
                <span
                  className="leading-[32px]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </div>
        {isMobile && (
          <div className="flex items-center justify-center">
            <div className="-scale-y-100 flex-none">
              <div className="h-0 relative w-[660px]">
                <div
                  aria-hidden="true"
                  className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
