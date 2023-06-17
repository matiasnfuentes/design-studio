import { Category, SubCategory } from "../../api/types";
import { SubCategoryButton } from "./SubCategoryButton";
import { Spinner } from "../common/Spinner";
import { capitalize } from "../../helpers/helpers";
import { ItemList } from "./ItemList";
import { BackButton } from "./BackButton";
import { CloseButton } from "./CloseButton";

interface PropTypes {
  category: Category;
  subCategories: SubCategory[];
  setSubCategory: (subCategory?: SubCategory) => void;
  subCategory?: SubCategory;
  handleCollapseSideBar: () => void;
}

export const SubCategoriesList = ({
  subCategories,
  category,
  setSubCategory,
  subCategory,
  handleCollapseSideBar,
}: PropTypes) => {
  const onClick = (subCategory: SubCategory) => setSubCategory(subCategory);
  const handleRemoveSubCategory = () => setSubCategory(undefined);

  return (
    <div className="w-[38rem] h-full bg-neutral-100 relative pt-5 pl-5">
      {subCategory && (
        <BackButton onClick={handleRemoveSubCategory} categoryName={category} />
      )}

      <CloseButton onClick={handleCollapseSideBar} />

      <h2 className="text-2xl font-bold text-neutral-500 mb-5 ">
        {capitalize(subCategory?.name || category)}
      </h2>

      {subCategory ? (
        <ItemList subCategory={subCategory} />
      ) : !subCategories.length ? (
        <Spinner />
      ) : (
        subCategories.map((subCategory, i) => (
          <SubCategoryButton
            onClick={onClick}
            subCategory={subCategory}
            key={`${subCategory.name}-${i}`}
          />
        ))
      )}
    </div>
  );
};
