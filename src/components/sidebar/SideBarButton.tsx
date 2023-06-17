import { Category } from "../../api/types";
import { capitalize } from "../../helpers/helpers";
import classNames from "classnames";

interface PropTypes {
  onClick: (category: Category) => void;
  category: Category;
  icon: string;
  currentCategory?: Category;
}

const selected =
  "bg-neutral-100 after:absolute after:h-4 after:w-8 after:-bottom-4 after:right-0 after:border-red-100 after:rounded-tr-[100px_70px] after:shadow-[10px_-2px] after:shadow-neutral-100 before:absolute before:h-4 before:w-8 before:bottom-20 before:right-0 before:border-red-100 before:rounded-br-[100px_70px] before:shadow-[12px_2px] before:shadow-neutral-100";

export const SideBarButton = ({
  onClick,
  icon,
  category,
  currentCategory,
}: PropTypes) => {
  const handleClick = () => onClick(category);

  const classes = classNames(
    "relative hover:bg-neutral-100 flex flex-col justify-center items-center w-full h-20 ",
    { [selected]: currentCategory === category }
  );

  return (
    <button className={classes} onClick={handleClick}>
      <img className="h-10 w-10" src={icon} alt={category} />
      <p className="text-xs text-gray-500">{capitalize(category)}</p>
    </button>
  );
};
