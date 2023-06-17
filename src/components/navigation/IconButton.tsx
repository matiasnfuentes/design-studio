import React from "react";

interface PropTypes {
  onClick: () => void;
  altText: string;
  imgCustomClasses?: string;
  buttonCustomClasses?: string;
  icon: string;
}

export const IconButton = ({
  onClick,
  altText,
  imgCustomClasses,
  buttonCustomClasses,
  icon,
}: PropTypes) => {
  const buttonClasses =
    "bg-white hover:bg-neutral-100 h-8 w-7 p-px " + buttonCustomClasses || "";
  const imgClasses = "h-7 w-7 " + imgCustomClasses || "";
  return (
    <button className={buttonClasses} onClick={onClick}>
      <img className={imgClasses} src={icon} alt={altText} />
    </button>
  );
};
