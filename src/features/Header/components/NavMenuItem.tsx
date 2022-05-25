import Link from "next/link";

interface Props {
  visible: boolean;
  href: string;
  text: string;
}

export function NavMenuItem({ visible, href, text }: Props) {
  const className = `nav-menu__item  ${visible ? "visible" : ""}`;

  return (
    <li className={className}>
      <Link href={href}>
        <a className="nav-menu__link">{text}</a>
      </Link>
    </li>
  );
}
