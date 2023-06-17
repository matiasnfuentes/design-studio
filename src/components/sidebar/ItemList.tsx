import { SubCategory } from "../../api/types";

interface PropTypes {
  subCategory: SubCategory;
}

export const ItemList = ({ subCategory }: PropTypes) => {
  const { items, name } = subCategory;
  return (
    <div className="grid grid-cols-3">
      {items.map((item) => (
        <div
          className="w-40 flex flex-col justify-center items-center"
          key={`${name} - ${item.name}`}
        >
          <img
            className="h-40 w-40 rounded-md"
            src={item.img}
            alt={`${name} - ${item.name}`}
          />
          <p className="text-neutral-500 mt-1">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
