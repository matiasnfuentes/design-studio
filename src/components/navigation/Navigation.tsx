import plus from "../../assets/img/+.png";
import minus from "../../assets/img/-.png";
import { ArrowButton } from "./ArrowButton";
import { IconButton } from "./IconButton";

export const Navigation = () => {
  const onZoomIn = () => console.log("zooming in");
  const onZoomOut = () => console.log("zooming out");
  const onMoveRight = () => console.log("moving right");
  const onMoveLeft = () => console.log("moving left");
  const onMoveUp = () => console.log("moving up");
  const onMoveDown = () => console.log("moving down");

  return (
    <div className="absolute bottom-6 right-6 flex">
      <div className="h-20 w-9 mr-6 flex flex-col justify-evenly items-center divide-y rounded-md overflow-hidden bg-white">
        <IconButton
          icon={plus}
          altText="Click to zoom in"
          onClick={onZoomIn}
          buttonCustomClasses="rounded-t-md"
        />
        <IconButton
          icon={minus}
          altText="Click to zoom out"
          onClick={onZoomOut}
          buttonCustomClasses="rounded-b-md"
        />
      </div>
      <div className="w-20 h-20 rounded-md overflow-hidden bg-white flex justify-center items-center">
        <div className="rotate-45 ">
          <div className="-mb-2">
            <ArrowButton
              imgCustomClasses="-rotate-45"
              onClick={onMoveUp}
              altText="click to move up"
            />
            <ArrowButton
              onClick={onMoveRight}
              altText="click to move right"
              imgCustomClasses="rotate-45"
            />
          </div>
          <div>
            <ArrowButton
              onClick={onMoveLeft}
              altText="click to move left"
              imgCustomClasses="rotate-[-135deg]"
            />
            <ArrowButton
              onClick={onMoveDown}
              altText="click to move down"
              imgCustomClasses="rotate-[135deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
