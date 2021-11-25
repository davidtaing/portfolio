import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const NavBarItem = ({ href, text }: any) => {
  const path = useRouter().asPath;

  return (
    <li className={"nav-item" + (href === path ? " active" : "")}>
      <Link href={href}>
        <a className="nav-link">{text}</a>
      </Link>
    </li>
  );
};

export default NavBarItem;
