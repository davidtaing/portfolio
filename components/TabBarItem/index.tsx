import Link from "next/link";

const TabBarItem = ({ href, text, iconName, active, onTabClick }: any) => {
  const classNames = "tabbar-item" + (active ? " active" : "");

  return (
    <li className={classNames} onClick={onTabClick}>
      <Icon iconName={iconName} />
      <Link href={href}>
        <a className="tabbar-link">{text}</a>
      </Link>
    </li>
  );
};

export default TabBarItem;
