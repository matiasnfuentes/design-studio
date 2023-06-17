import { Category, SubCategory } from "./types";

const BASE_URL = "https://us-central1-prueba-front-280718.cloudfunctions.net";

const get = <TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> =>
  fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);

export const getItemsForCategory = (category: Category) =>
  get<SubCategory[]>(`${BASE_URL}/${category}`);
