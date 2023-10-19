import {heroes} from "../data/heroes";

export const getheroesByPublisher = (publisher) => {
  const validate = ["Marvel Comics", "DC Comics"];
  if (!validate.includes(publisher)) {
    throw new Error("invalidate publisher");
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
