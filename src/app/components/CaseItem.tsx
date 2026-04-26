import React from "react";
import { Button } from "./Button";
import { Gallery } from "./Gallery";
import type { CaseData } from "../../constants/cases";

interface CaseItemProps extends CaseData {
  onImageClick: (index: number) => void;
  isMobile?: boolean;
}

export function CaseItem({
  title,
  figmaUrl,
  figmaButtonText,
  githubUrl,
  githubButtonText,
  prototypeUrl,
  prototypeButtonText,
  exampleUrl,
  exampleButtonText,
  description,
  goal,
  solution,
  images,
  onImageClick,
  showBorder = true,
  showGallery = true,
  isMobile = false,
}: CaseItemProps) {
  return (
    <div
      className={`flex flex-col gap-[32px] items-start ${
        isMobile ? "w-full" : "w-[849px]"
      }`}
    >
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div
          className={`flex flex-col items-start w-full ${
            isMobile ? "" : "gap-[4px] justify-center"
          }`}
        >
          <div
            className={`flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] w-[min-content] ${
              isMobile ? "text-[20px]" : "text-[22px] tracking-[0.24px]"
            }`}
          >
            <p className={isMobile ? "leading-[26px]" : "leading-[33px]"}>
              {title}
            </p>
          </div>
          <div
            className={
              isMobile
                ? "flex flex-col gap-[16px] items-start mt-[12px]"
                : "flex gap-[32px] items-start"
            }
          >
            {figmaUrl && (
              <Button href={figmaUrl} icon="figma">
                {figmaButtonText || "Figma-файл"}
              </Button>
            )}
            {githubUrl && (
              <Button href={githubUrl} icon="github">
                {githubButtonText || "Github"}
              </Button>
            )}
            {prototypeUrl && (
              <Button href={prototypeUrl} icon="github">
                {prototypeButtonText || "Прототип"}
              </Button>
            )}
            {exampleUrl && (
              <Button href={exampleUrl} icon={isMobile ? "figma" : "default"}>
                {exampleButtonText || "Пример"}
              </Button>
            )}
          </div>
        </div>

        {description && (
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
              <p className="leading-[32px]">{description}</p>
            </div>
          </div>
        )}

        {goal && (
          <div className="flex flex-col items-center justify-center leading-[0] w-full">
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full">
              <p className="leading-[35.7px]">Цель:</p>
            </div>
            <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
              <p className="leading-[32px]">{goal}</p>
            </div>
          </div>
        )}

        {solution && (
          <div className="flex flex-col items-center justify-center leading-[0] w-full">
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#828282] text-[21px] tracking-[0.21px] w-full">
              <p className="leading-[35.7px]">Решение</p>
            </div>
            <div className="flex flex-col justify-center not-italic relative shrink-0 text-[#1f1f1f] text-[20px] w-full">
              <p className="leading-[32px]">{solution}</p>
            </div>
          </div>
        )}
      </div>

      {showGallery && (
        <Gallery
          images={images}
          onImageClick={(index) => onImageClick(index)}
          containerClassName={
            isMobile
              ? "flex gap-[16px] items-center w-full overflow-x-auto"
              : "flex gap-[16px] items-center"
          }
          overlayClassName={
            isMobile
              ? "bg-[rgba(0,0,0,0.02)] inset-[0_-0.12px_-0.13px_0]"
              : "bg-[rgba(0,0,0,0.02)]"
          }
        />
      )}

      {showBorder && (
        <div className="flex flex-col items-start pb-[40px] pt-[8px] w-full">
          <div className="flex items-center justify-center w-full">
            <div className="-scale-y-100 flex-none w-full">
              <div className="h-px relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[#c5c5c5] border-b border-solid inset-0 pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
