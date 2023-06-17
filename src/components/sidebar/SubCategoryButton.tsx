import { ArrowIcon } from "../common/CaretIcon";
import { SubCategory } from "../../api/types";

interface PropTypes {
  subCategory: SubCategory;
  onClick: (SubCategory: SubCategory) => void;
}

export const SubCategoryButton = ({ subCategory, onClick }: PropTypes) => {
  const handleClick = () => onClick(subCategory);

  return (
    <div className="pr-5">
      <button
        onClick={handleClick}
        className="bg-white w-full h-12 mb-3 rounded-xl flex flex-row items-center justify-between text-neutral-500 text-xl font-normal hover:border-2"
      >
        <span className="ml-5">{subCategory.name}</span>
        <ArrowIcon customClasses="h-5 w-6 -rotate-90 mr-5" />
      </button>
    </div>
  );
};
