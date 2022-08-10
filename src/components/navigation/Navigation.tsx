import NavLink from "./NavLink";

export interface INavigation {
  className?: string;
}

const Navigation: React.FC<INavigation> = ({ className }) => {
  return (
    <ul className={className}>
      <NavLink title="Home" href="/" />
      <NavLink title="About" href="/" />
      <NavLink title="Fuck U" href="/" />
    </ul>
  );
};

export default Navigation;
