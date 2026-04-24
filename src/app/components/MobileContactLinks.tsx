interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
}

function ContactLink({ href, children }: ContactLinkProps) {
  return (
    <a
      className="block cursor-pointer decoration-solid leading-[32px] text-[20px] underline text-[#1f1f1f]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

interface ContactItemProps {
  label: string;
  children: React.ReactNode;
}

function ContactItem({ label, children }: ContactItemProps) {
  return (
    <div className="flex flex-[1_0_0] flex-col items-start max-w-[1440px] min-w-px">
      <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#828282] text-[20px] w-[min-content]">
        <p className="leading-[32px]">{label}</p>
      </div>
      <div className="flex gap-[4px] items-center justify-center">
        <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[0px] whitespace-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ContactItemFullWidthProps {
  label: string;
  children: React.ReactNode;
}

function ContactItemFullWidth({ label, children }: ContactItemFullWidthProps) {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col items-start max-w-[1440px] w-full">
        <div className="flex flex-col justify-center leading-[0] min-w-full not-italic text-[#828282] text-[20px] w-[min-content]">
          <p className="leading-[32px]">{label}</p>
        </div>
        <div className="flex gap-[4px] items-center justify-center">
          <div className="flex flex-col justify-center leading-[0] not-italic text-[#1f1f1f] text-[0px] whitespace-nowrap">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileContactLinks() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Row 1: Resume & Portfolio */}
      <div className="flex gap-[16px] items-start w-full">
        <ContactItem label="Resume:">
          <ContactLink href="https://drive.google.com/file/d/1lwLDIsFsPkCB4fV_pA51vrxF_OifP2N4/view">
            Download CV
          </ContactLink>
        </ContactItem>
        <ContactItem label="Portfolio:">
          <ContactLink href="https://drive.google.com/file/d/1ghRI7AXcYDnfbW4NLPCToPiU8FIJRB67/view">
            PDF Portfolio
          </ContactLink>
        </ContactItem>
      </div>

      {/* Row 2: LinkedIn & Github */}
      <div className="flex gap-[16px] items-start w-full">
        <ContactItem label="LinkedIn:">
          <ContactLink href="https://www.linkedin.com/in/kashaev/">
            @kashaev
          </ContactLink>
        </ContactItem>
        <ContactItem label="Github">
          <ContactLink href="https://github.com/mfd">@mfd</ContactLink>
        </ContactItem>
      </div>

      {/* Row 3: Telegram (Full Width) */}
      <ContactItemFullWidth label="Telegram:">
        <ContactLink href="https://t.me/kashaev">@kashaev</ContactLink>
      </ContactItemFullWidth>
    </div>
  );
}
