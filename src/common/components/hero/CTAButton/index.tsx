import { FC } from "react";
import Link from "next/link";
import Button from "../../Button";

interface Props {
  href: string;
}

const CTAButton: FC<Props> = ({ href, children }) => (
  <div className="cta-button">
    <Link href={href}>
      <a>
        <Button>{children}</Button>
      </a>
    </Link>
  </div>
);

export default CTAButton;
