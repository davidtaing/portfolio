import { useState } from "react";
import { NavMenuItem } from "./NavMenuItem";
import { HamburgerMenu } from "./HamburgerMenu";

export function NavMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`nav-menu ${visible ? "active" : ""}`}>
      <ul className="nav-menu__list flex">
        <HamburgerMenu visible={visible} setVisible={setVisible} />
        <NavMenuItem visible={visible} href="/" text="Home" />
        <NavMenuItem visible={visible} href="/projects" text="Projects" />
        <NavMenuItem visible={visible} href="/blogs" text="Blogs" />
        <NavMenuItem visible={visible} href="/contact-me" text="Contact Me" />
      </ul>
    </div>
  );
}
