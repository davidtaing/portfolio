import Link from "next/link";

export function NavLogo() {
  return (
    <Link href="/" passHref={true}>
      <a className="nav-menu__logo">
        <span className="text--underline">Tee</span>ang
      </a>
    </Link>
  );
}
