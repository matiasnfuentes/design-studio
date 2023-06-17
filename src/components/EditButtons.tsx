import { Button } from "./common/Button";

export const EditButtons = () => {
  const onPin = () => console.log("clicking pin button");
  const onRemove = () => console.log("clicking remove button");
  return (
    <div className="absolute right-5 top-32 flex flex-row">
      <Button text="Fijar" onClick={onPin} />
      <Button text="Borrar" onClick={onRemove} />
    </div>
  );
};
