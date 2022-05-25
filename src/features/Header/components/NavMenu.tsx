import Link from "next/link";
import { useState } from "react";

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const visibileClassName = ` ${visible ? "visible" : ""}`;

  return (
    <div className={`nav-menu ${visible ? "active" : ""}`}>
      <ul className="nav-menu__list flex">
        <span
          className="hamburger-menu material-symbols-outlined"
          onClick={() => setVisible(!visible)}
        >
          menu
        </span>
        <li className={"nav-menu__item" + visibileClassName}>
          <Link href="/">
            <a className="nav-menu__link">Home</a>
          </Link>
        </li>
        <li className={"nav-menu__item" + visibileClassName}>
          <Link href="/projects">
            <a className="nav-menu__link">Projects</a>
          </Link>
        </li>
        <li className={"nav-menu__item" + visibileClassName}>
          <Link href="/blogs">
            <a className="nav-menu__link">Blogs</a>
          </Link>
        </li>
        <li className={"nav-menu__item" + visibileClassName}>
          <Link href="/contact-me">
            <a className="nav-menu__link">Contact Me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
