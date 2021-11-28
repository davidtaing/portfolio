import Link from "next/link";
import Button from "../Button";

const CTAButton = ({ href, text }) => (
  <Link href={href}>
    <a>
      <Button className="cta-button" text={text} />
    </a>
  </Link>
);

export default CTAButton;
