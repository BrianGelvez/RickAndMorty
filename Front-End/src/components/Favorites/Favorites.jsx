import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


export const Favorites = ({ myFavorites }) => {

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  };

  return (
    <div>

      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="B">Decendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {myFavorites?.map(({ name, id, status, species, gender, origin, image, onClose }) => (
        <Card
        key={`${name}-${id}`}
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
        image={image}
        onClose={onClose}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
