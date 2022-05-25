import Link from "next/link";
import { NavbarMenu } from "./NavbarMenu";

export function Header() {
  return (
    <header className="nav-header">
      <div className="wrapper">
        <nav className="nav-menu__container flex space-between">
          <Link href="/" passHref={true}>
            <a className="nav-menu__logo">
              <span className="text--underline">Tee</span>ang
            </a>
          </Link>
          <NavbarMenu />
        </nav>
      </div>
    </header>
  );
}
