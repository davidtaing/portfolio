import Link from "next/link";

const TabBarItem = ({ href, text, active, onTabClick }: any) => {
  const classNames = "tabbar-item" + (active ? " active" : "");

  return (
    <li className={classNames} onClick={onTabClick}>
      <Link href={href}>
        <a className="tabbar-link">{text}</a>
      </Link>
    </li>
  );
};

export default TabBarItem;
