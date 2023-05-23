import axios from 'axios'

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
     try {
       const { data } = await axios.post(endpoint, character);
       const uniqueData = data.filter((item, index, self) =>
         index === self.findIndex((t) => (
           t.id === item.id && t.name === item.name
         ))
       );
 
       console.log('Data to add:', uniqueData);
 
       dispatch({
         type: 'ADD_FAV',
         payload: uniqueData,
       });
     } catch (err) {
       console.log(err);
     }
   };
 };


 export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
     try {
       const { data } = await axios.delete(endpoint);
       dispatch({
         type: 'REMOVE_FAV',
         payload: data,
       });
     } catch (err) {
       console.log(err);
     }
   };
 };

export const filterCards = (gender) => {
    return {type: "FILTER", payload: gender}
};

export const orderCards = (order) => {
    return {type: "ORDER", payload: order}
};