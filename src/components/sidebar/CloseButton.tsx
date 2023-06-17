import { ArrowIcon } from "../common/CaretIcon";

interface PropTypes {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={
        "absolute flex items-center text-neutral-400 -right-7 bottom-1/2 bg-neutral-100 w-7 h-20 rounded-r-lg after:block after:absolute after:bg-neutral-100 after:h-7 after:w-10 after:rotate-[30deg] after:bottom-[61px] after:right-[2px] after:rounded-lg before:block before:absolute before:bg-neutral-100 before:h-7 before:w-10 before:rotate-[-30deg] before:bottom-[-10px] before:right-[2px] before:rounded-lg"
      }
    >
      <ArrowIcon customClasses="h-6 w-6 rotate-90 " />
    </button>
  );
};
