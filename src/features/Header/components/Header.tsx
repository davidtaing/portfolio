import { HeaderContextProvider } from "../contexts/HeaderContext";
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <HeaderContextProvider>
      <header className="nav-header">
        <div className="wrapper">
          <nav className="nav-menu__container flex space-between">
            <NavLogo />
            <NavMenu />
          </nav>
        </div>
      </header>
    </HeaderContextProvider>
  );
}
