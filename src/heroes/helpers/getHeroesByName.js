import {heroes} from "../data/heroes";

export const getHeroesByName = (name) => {
  const nameHero = name.toLowerCase().trim();
  if (nameHero.length === 0) return [];
  const heroesFilteredByName = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(nameHero)
  );
  if (name !== "") {
    return heroesFilteredByName;
  } else return [];
};
