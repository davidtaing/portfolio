import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 2px solid #4f4f4f;
  height: 60px;

  ul {
    display: inline-flex;
    justify-content: end;
    gap: 1.5rem;
    padding: 0;
    margin-left: auto;

    li {
      list-style: none;
      display: inline;
    }
  }
`;

export function Header() {
  return (
    <StyledHeader>
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
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="/blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a href="resume">Resume</a>
            </li>
            <li className="nav-item">
              <a href="contact-me">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}
