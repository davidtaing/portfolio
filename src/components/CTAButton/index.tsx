import { FC } from "react";
import Link from "next/link";
import Button from "../Button";

interface Props {
  href: string;
  text: string;
}

const CTAButton: FC<Props> = ({ href, text }) => (
  <div className="cta-button">
    <Link href={href}>
      <a>
        <Button text={text} />
      </a>
    </Link>
  </div>
);

export default CTAButton;
