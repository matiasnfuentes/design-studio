import { IconButton } from "./IconButton";
import arrow from "../../assets/img/arrow.png";

interface PropTypes {
  onClick: () => void;
  altText: string;
  imgCustomClasses?: string;
}

export const ArrowButton = ({
  onClick,
  altText,
  imgCustomClasses,
}: PropTypes) => (
  <IconButton
    icon={arrow}
    buttonCustomClasses="rounded-b-md m-px"
    imgCustomClasses={imgCustomClasses}
    onClick={onClick}
    altText={altText}
  />
);
