import {Link} from "react-router-dom";
import {Hero} from "../pages";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroUrl = `/heroesAppUdemy/heroesImages/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={heroUrl} alt={superhero} />
          </div>
          <div className="col-8">
            <div className=".card-body ">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {characters.includes(alter_ego) && (
                <p>{characters.slice(alter_ego.length + 1)}</p>
              )}

              <Link to={`/hero/${id}`}> mas... </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
