interface PropTypes {
  customClasses?: string;
}

export const ArrowIcon = ({ customClasses }: PropTypes) => {
  return (
    <svg
      className={customClasses || ""}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};