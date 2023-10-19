import {useMemo} from "react";
import {HeroCard} from "./index";
import {getheroesByPublisher} from "../helpers";

export const HeroesList = ({publisher}) => {
  const heroesFiltered = useMemo(
    () => getheroesByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroesFiltered.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
