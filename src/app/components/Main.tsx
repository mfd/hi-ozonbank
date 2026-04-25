import { Lightbox, useLightbox } from "./Lightbox";
import { Button } from "./Button";
import { desktopCasesDataSm, desktopCasesDataFull } from "../../constants/cases";

interface GalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
}

function Gallery({ images, onImageClick }: GalleryProps) {
  return (
    <div className="flex gap-[16px] items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-[#f7f7f7] flex flex-col h-[86px] items-start relative shrink-0 w-[153px] cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="h-full overflow-clip relative w-full">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover size-full"
              src={image}
            />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.02)]" />
        </div>
      ))}
    </div>
  );
}

interface CaseItemProps {
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
  onImageClick: (index: number) => void;
  showBorder?: boolean;
  showGallery?: boolean;
}

function CaseItem({
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
}: CaseItemProps) {
  return (
    <div className="flex flex-col gap-[32px] items-start w-[849px]">
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="flex flex-col gap-[4px] items-start justify-center w-full">
          <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1f1f] text-[22px] tracking-[0.24px] w-[min-content]">
            <p className="leading-[33px]">{title}</p>
          </div>
          <div className="flex gap-[32px] items-start">
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
              <Button href={exampleUrl} icon="default">
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
        <Gallery images={images} onImageClick={(index) => onImageClick(index)} />
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

export default function Main() {
  const { openLightbox, lightboxProps } = useLightbox();

  return (
    <>
      <div className="flex flex-col gap-[40px] items-start pr-[98px] w-full">
        {/* Header */}
        <div className="flex items-start overflow-clip w-full">
          <div className="flex flex-col gap-[16px] items-start leading-[0] not-italic overflow-clip text-[#1f1f1f] w-[849px]">
            <div className="flex flex-col justify-center text-[32px] tracking-[0.21px] w-full">
              <p className="leading-[48px]">
                👋 Привет, Озон-банк!
              </p>
            </div>
            <div className="flex flex-col justify-center text-[0px] w-full">
              <p className="text-[20px] leading-[32px]">
                  Меня зовут Камиль, я работаю ведущим
                  продуктовым дизайнером в Альфа‑Банке,
                  мне очень близка тема дизайн-систем
                  и разработки, поэтому хочу откликнуться,
                  на вакансию&nbsp;
                  <strong>Продуктового дизайнера дизайн-системы</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-[16px] items-start justify-center overflow-clip w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
              <p className="leading-[48px]">Ключевые навыки</p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-center w-[849px]">
            <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#1f1f1f] text-[20px] w-[min-content]">
              <ul className="space-y-[12px]">
                <li className="list-disc ms-[30px]">
                  <span className="leading-[32px]">
                    Figma: variants, auto layout, variables, libraries, branches, memory optimization, figma mcp
                  </span>
                </li>
                <li className="list-disc ms-[30px]">
                  <span className="leading-[32px]">
                    Сфокусирован на точности реализации:
                    обеспечиваю полное соответствие кода макетам
                  </span>
                </li>
                <li className="list-disc ms-[30px]">
                  <span className="leading-[32px]">
                    Проектирую решения с учетом технических
                    ограничений. Умею находить баланс между
                    сложностью разработки и бизнес‑целями,
                    аргументируя дизайн-решения данными
                    аналитики и результатами UX-исследований
                  </span>
                </li>
                <li className="list-disc ms-[30px]">
                  <span className="leading-[32px]">
                    Люблю автоматизировать воркфлоу и рутину,
                    пишу скрипты на bash/js
                  </span>
                </li>
                <li className="list-disc ms-[30px]">
                  <span className="leading-[32px]">
                    Умею работать с кодом и разговариваю с
                    фронтендами на одном языке (
                    <a
                      className="cursor-pointer decoration-solid not-italic underline"
                      href="https://learn.javascript.ru/courses/js-20160216-2130/mfd/en/certificate.jpg"
                      target="_blank"
                    >
                      javascript.ru сertification
                    </a>
                    )
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cases Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
              <p className="leading-[48px]">
                Релевантные кейсы:
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            {desktopCasesDataSm.map((caseItem, caseIndex) => (
              <CaseItem
                key={caseIndex}
                {...caseItem}
                onImageClick={(imageIndex) => openLightbox(desktopCasesDataFull[caseIndex].images, imageIndex)}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox {...lightboxProps} />
    </>
  );
}