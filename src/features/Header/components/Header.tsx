import { useState } from "react";
import Link from "next/link";

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

export function NavbarMenu() {
  const [active, setActive] = useState(false);

  return (
    <div className={`nav-menu ${active ? "active" : ""}`}>
      <ul className="nav-menu__list flex flex-column">
        <span
          className="hamburger-menu material-symbols-outlined"
          onClick={() => setActive(!active)}
        >
          menu
        </span>
        {active ? (
          <>
            <li className="nav-menu__item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link href="/contact-me">
                <a>Contact Me</a>
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
