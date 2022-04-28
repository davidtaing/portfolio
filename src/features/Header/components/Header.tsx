export function Header() {
  return (
    <header>
      <nav className="nav-menu">
        <div className="wrapper">
          <a className="nav-logo" href="/">
            Teeang
          </a>
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
        </div>
      </nav>
    </header>
  );
}
