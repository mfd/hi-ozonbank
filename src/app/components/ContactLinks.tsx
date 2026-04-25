import { Button } from "./Button";


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
    <div className="flex flex-col items-start w-full">
      <p className="leading-[32px] text-[#828282] text-[20px]">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full">
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

      <ContactItem label="Email:">
        <ContactLink href="mailto:kashaev@gmail.com">
          kashaev@gmail.com
        </ContactLink>
      </ContactItem>

      <ContactItem label="Telegram:">
        <ContactLink href="https://t.me/kashaev">@kashaev</ContactLink>
      </ContactItem>

      <ContactItem label="LinkedIn:">
        <ContactLink href="https://www.linkedin.com/in/kashaev/">
          @kashaev
        </ContactLink>
      </ContactItem>

      <ContactItem label="Github">
        <ContactLink href="https://github.com/mfd">@mfd</ContactLink>
      </ContactItem>
    </div>
  );
}
