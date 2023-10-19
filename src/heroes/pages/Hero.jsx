import {useMemo} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroeById} from "../helpers/index";

export const Hero = () => {
  const {id} = useParams();

  const hero = useMemo(() => getHeroeById(id), [id]);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const heroUrl = `/src/assets/images/heroes/${id}.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={heroUrl}
          alt={hero.id}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b> Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b> Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b> First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button onClick={onBack} className="btn btn-outline-info">
          Back
        </button>
      </div>
    </div>
  );
};
