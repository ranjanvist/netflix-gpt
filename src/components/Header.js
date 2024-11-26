import Logo from "../utils/svg-logos/Logo";
import Login from "./Login";

const Header = () => {
  return (
    <div className="px-8 py-2 absolute top-0 left-0 w-full">
      <div>
        <img
          src="/png-transparent-netflix.png"
          alt="tet"
          className="w-[148px] h-[40px]"
        />
      </div>
    </div>
  );
};
export default Header;
