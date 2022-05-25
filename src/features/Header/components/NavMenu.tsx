import { useState } from "react";
import { useRouter } from "next/router";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavMenuItem } from "./NavMenuItem";

export function NavMenu() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const currentRoute = router.pathname;

  return (
    <div className={`nav-menu ${visible ? "active" : ""}`}>
      <ul className="nav-menu__list flex">
        <HamburgerMenu visible={visible} setVisible={setVisible} />
        <NavMenuItem
          visible={visible}
          href="/"
          text="Home"
          currentRoute={currentRoute}
        />
        <NavMenuItem
          visible={visible}
          href="/projects"
          text="Projects"
          currentRoute={currentRoute}
        />
        <NavMenuItem
          visible={visible}
          href="/blogs"
          text="Blogs"
          currentRoute={currentRoute}
        />
        <NavMenuItem
          visible={visible}
          href="/contact-me"
          text="Contact Me"
          currentRoute={currentRoute}
        />
      </ul>
    </div>
  );
}
