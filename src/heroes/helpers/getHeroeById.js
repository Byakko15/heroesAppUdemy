import {heroes} from "../data/heroes";

export const getHeroeById = (id) => {
  const heroById = heroes.find((hero) => hero.id === id);

  return heroById;
};
