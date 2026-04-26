import React from "react";
import { introContent } from "../../constants/introSkills";

interface IntroSectionProps {
  isMobile?: boolean;
}

export function IntroSection({ isMobile = false }: IntroSectionProps) {
  return (
    <div className="flex items-start overflow-clip w-full">
      <div
        className={`flex flex-col gap-[16px] items-start leading-[0] not-italic overflow-clip text-[#1f1f1f] ${
          isMobile ? "w-full" : "w-[849px]"
        }`}
      >
        <div
          className={`flex flex-col justify-center tracking-[0.21px] w-full ${
            isMobile ? "text-[28px]" : "text-[32px]"
          }`}
        >
          <p className={isMobile ? "leading-[42px]" : "leading-[48px]"}>
            {introContent.greeting}
          </p>
        </div>
        <div className="flex flex-col justify-center text-[0px] w-full">
          <p
            className="text-[20px] leading-[32px]"
            dangerouslySetInnerHTML={{ __html: introContent.description }}
          />
        </div>
      </div>
    </div>
  );
}
