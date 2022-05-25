import Link from "next/link";

interface Props {
  visible: boolean;
  href: string;
  text: string;
  currentRoute: string;
}

export function NavMenuItem({ visible, href, text, currentRoute }: Props) {
  const activeClass = currentRoute === href ? "active" : "";
  const visibleClass = visible ? "visible" : "";
  const className = `nav-menu__item ${visibleClass} ${activeClass}`;

  return (
    <li className={className}>
      <Link href={href}>
        <a className="nav-menu__link">{text}</a>
      </Link>
    </li>
  );
}
