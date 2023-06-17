import { useState } from "react";
import { ArrowIcon } from "../common/CaretIcon";

const dropDownOptions = [
  "Guardar y salir",
  "Salir sin guardar",
  " Guardar y continuar",
];

export const Dropdown = () => {
  const [currentOption, setCurrentOption] = useState("Guardar y salir");

  const onClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setCurrentOption(dropDownOptions[event.currentTarget.value]);
    document.getElementById("update-project-dropdown")?.blur();
  };

  return (
    <button
      id="update-project-dropdown"
      className="relative z-50 flex justify-center items-center bg-white border focus:outline-none shadow text-neutral-500 rounded-md focus:ring ring-gray-200 h-14 w-52 group"
    >
      <p className="w-9/12 px-4 text-lg font-normal"> {currentOption}</p>
      <span className="border-l flex justify-center items-center ring-gray-300 w-3/12 h-full py-0.5 hover:bg-neutral-100">
        <ArrowIcon customClasses="w-8 h-8" />
      </span>
      <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-2 rounded-md">
        <ul className="text-left border rounded-md">
          {dropDownOptions.map((option, i) => (
            <li
              className="h-14 flex items-center text-lg font-normal px-4 py-1 hover:bg-neutral-100 border-b"
              key={`save-option-${i}`}
              value={i}
              onClick={onClick}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};
