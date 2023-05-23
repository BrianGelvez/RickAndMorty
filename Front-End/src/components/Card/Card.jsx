import { Link } from 'react-router-dom';
import './Card.modules.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';


export function Card({ name, id, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ name, id, status, species, gender, origin, image, onClose });
      setIsFav(!isFav)
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   return (
      <div className='Card2'>
         <div className="Card">
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button onClick={() => onClose(id)} className='botonx'>X</button>
            <img src={image} alt='Loading...' />
            <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
         </div>
      </div>
   );
};


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);

