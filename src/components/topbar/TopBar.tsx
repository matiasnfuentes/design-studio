import logo from "../../assets/img/logo-2.png";
import { Dropdown } from "./Dropdown";

export const TopBar = () => {
  return (
    <div className="relative flex justify-between items-center min-w-full bg-neutral-700 h-full">
      <img className="h-14 w-44 rounded ml-44" src={logo} alt="brand logo" />
      <div className="mr-44">
        <Dropdown />
      </div>
    </div>
  );
};
