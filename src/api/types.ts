export type Category = "equipamiento" | "aberturas" | "terminaciones";

export type SubCategory = {
  name: string;
  items: Item[];
};

export type Item = {
  name: string;
  img: string;
};
