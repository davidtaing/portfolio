import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav className="nav-menu flex">
          <Link href="/" passHref={true}>
            <Image
              alt="Logo"
              src="/Logo.svg"
              layout="intrinsic"
              width="90px"
              height="27px"
            />
          </Link>
          <ul className="nav-menu__list">
            <li className="nav-menu__item">
              <a href="/projects">Projects</a>
            </li>
            <li className="nav-menu__item">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="nav-menu__item">
              <a href="resume">Resume</a>
            </li>
            <li className="nav-menu__item">
              <a href="contact-me">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
