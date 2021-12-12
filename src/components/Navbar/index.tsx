import { FC } from "react";
import Link from "next/link";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <a>TEEANG</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
