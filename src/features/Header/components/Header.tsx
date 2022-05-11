import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav className="nav-menu flex">
          <Link href="/" passHref={true}>
            <Link href="/">
              <a className="nav-menu__logo">
                <span className="text--underline">Tee</span>ang
              </a>
            </Link>
          </Link>
          <ul className="nav-menu__list">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
