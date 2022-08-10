import Link from "next/link";

export interface INavLink {
  href: string;
  title: string;
}

const NavLink: React.FC<INavLink> = ({ href, title }) => {
  return (
    <li>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default NavLink;
