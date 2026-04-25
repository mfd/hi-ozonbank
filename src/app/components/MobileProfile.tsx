import imgAvatar from "../../imports/avatar.png";
import MobileContactLinks from "./MobileContactLinks";

export default function MobileRight() {
  return (
    <div className="bg-white">
      {/* Header with Avatar */}
      <div className="flex gap-[24px] items-center w-full mb-[32px]">
        <div className="relative rounded-full shrink-0 size-20">
          <img
            alt="Kamil Kashaev"
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
            src={imgAvatar}
          />
        </div>
        <div className="flex flex-[1_0_0] flex-col items-start min-w-px">
          <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[32px] tracking-[0.21px] w-full">
            <p className="leading-[38px]">Kamil Kashaev</p>
          </div>
        </div>
      </div>

      {/* Contact Info - 2 Column Grid */}
      <MobileContactLinks />
    </div>
  );
}