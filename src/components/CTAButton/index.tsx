import { FC } from "react";
import Link from "next/link";
import Button from "../Button";

interface Props {
  href: string;
  text: string;
}

const CTAButton: FC<Props> = ({ href, text }) => (
  <Link href={href}>
    <a>
      <Button className="cta-button" text={text} />
    </a>
  </Link>
);

export default CTAButton;
