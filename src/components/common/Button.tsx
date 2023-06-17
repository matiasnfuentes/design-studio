interface PropTypes {
  onClick: () => void;
  text: string;
}

export const Button = ({ onClick, text }: PropTypes) => (
  <button
    onClick={onClick}
    className="relative flex justify-center items-center bg-white border shadow text-neutral-500 text-lg rounded-md hover:ring ring-gray-500 h-12 w-28 m-3"
  >
    {text}
  </button>
);
