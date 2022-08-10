import Logo from "../brand/Logo";
import Navigation from "./Navigation";

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="text-white">
      <Logo />

      <Navigation className="flex gap-8" />
    </header>
  );
};

export default Header;
