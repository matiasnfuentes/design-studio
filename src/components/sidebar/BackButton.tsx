import { capitalize } from "../../helpers/helpers";
import { ArrowIcon } from "../common/CaretIcon";

interface PropTypes {
  categoryName: string;
  onClick: () => void;
}

export const BackButton = ({ onClick, categoryName }: PropTypes) => (
  <button
    onClick={onClick}
    className="flex flex-row items-center text-neutral-400 text-sm font-medium hover:neutral-500 rounded-md hover:bg-white mb-3 h-6 pr-1"
  >
    <ArrowIcon customClasses="h-3 w-3 rotate-90 " />
    <span className="font-md">{capitalize(categoryName)}</span>
  </button>
);
